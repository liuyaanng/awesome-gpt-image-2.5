#!/usr/bin/env node

import { execFile } from 'node:child_process';
import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';

const run = promisify(execFile);
const sourceHtml = process.argv[2] ?? '/tmp/apimodels-gpt-image-2-5.html';
const apiKey = process.env.TIKTOK_HUB_API_KEY;

if (!apiKey) throw new Error('TIKTOK_HUB_API_KEY is required');

function parseCards(html) {
  const chunks = [...html.matchAll(/self\.__next_f\.push\((\[.*?\])\)<\/script>/gs)]
    .map((match) => JSON.parse(match[1]));
  const payload = chunks.map((chunk) => chunk[1])
    .find((chunk) => typeof chunk === 'string' && chunk.includes('"cards":['));
  const marker = '"cards":[';
  const start = payload.indexOf(marker) + marker.length;
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = start; index < payload.length; index += 1) {
    const character = payload[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === '\\') escaped = true;
      else if (character === '"') inString = false;
    } else if (character === '"') inString = true;
    else if (character === '{' || character === '[') depth += 1;
    else if (character === '}' || character === ']') {
      depth -= 1;
      if (depth < 0) return JSON.parse(`[${payload.slice(start, index)}]`);
    }
  }

  throw new Error('Could not parse prompt cards');
}

async function curl(url, output, headers = []) {
  const args = ['--noproxy', '*', '--fail', '--location', '--silent', '--show-error', '--connect-timeout', '15', '--max-time', '60', '--retry', '3', '--retry-all-errors', '--retry-delay', '2'];
  for (const header of headers) args.push('-H', header);
  args.push(url, '-o', output);
  await run('curl', args);
}

async function readJsonIfPresent(path) {
  try {
    await access(path);
    const text = await readFile(path, 'utf8');
    return text ? JSON.parse(text) : null;
  } catch {
    return null;
  }
}

function postId(url) {
  return url.match(/status\/(\d+)/)?.[1];
}

function usablePrompt(prompt) {
  return typeof prompt === 'string' && prompt.trim() && !/^\$[a-z]\w*$/i.test(prompt.trim());
}

function cardImagePath(number, title) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 56);
  return `images/prompts/community/${String(number).padStart(3, '0')}-${slug}.webp`;
}

function cleanPrompt(text) {
  return text?.replace(/\n{3,}/g, '\n\n').trim() ?? '';
}

const html = await readFile(sourceHtml, 'utf8');
const cards = parseCards(html).filter((card) => new URL(card.sourceUrl).hostname === 'x.com');
const uniqueIds = [...new Set(cards.map((card) => postId(card.sourceUrl)))];
const details = new Map();
const comments = new Map();
await mkdir('data/tikhub/community-x', { recursive: true });
await mkdir('images/prompts/community', { recursive: true });

for (const id of uniqueIds) {
  const output = `data/tikhub/community-x/${id}.json`;
  const cached = await readJsonIfPresent(output);
  if (cached) details.set(id, cached.data);
  else {
    await curl(
      `https://api.tikhub.io/api/v1/twitter/web/fetch_tweet_detail?tweet_id=${id}`,
      output,
      [`Authorization: Bearer ${apiKey}`],
    );
    details.set(id, (await readJsonIfPresent(output))?.data);
  }
}

for (const card of cards.filter((item) => !usablePrompt(item.promptEn))) {
  const id = postId(card.sourceUrl);
  if (comments.has(id)) continue;
  const output = `data/tikhub/community-x/${id}-comments.json`;
  const cached = await readJsonIfPresent(output);
  if (cached) comments.set(id, cached.data.thread ?? []);
  else {
    try {
      await curl(
        `https://api.tikhub.io/api/v1/twitter/web/fetch_post_comments?tweet_id=${id}`,
        output,
        [`Authorization: Bearer ${apiKey}`],
      );
      comments.set(id, (await readJsonIfPresent(output))?.data.thread ?? []);
    } catch {
      comments.set(id, []);
    }
  }
}

const records = [];
for (const [offset, card] of cards.entries()) {
  const number = offset + 9;
  const id = postId(card.sourceUrl);
  const detail = details.get(id);
  const author = card.authorName?.replace(/^@/, '').toLowerCase();
  const authorReplies = (comments.get(id) ?? [])
    .filter((reply) => reply.author?.screen_name?.toLowerCase() === author)
    .map((reply) => cleanPrompt(reply.text))
    .filter((text) => text.length > 30)
    .sort((a, b) => b.length - a.length);
  const prompt = cleanPrompt(usablePrompt(card.promptEn) ? card.promptEn : detail?.text || authorReplies[0]);
  let imagePath = cardImagePath(number, card.titleEn);
  try {
    await access(imagePath);
  } catch {
    try {
      await curl(card.posterUrl, imagePath);
    } catch {
      const original = detail?.media?.photo?.[0]?.media_url_https;
      if (!original) imagePath = null;
      else await curl(`${original}?name=orig`, imagePath);
    }
  }
  records.push({
    number,
    id,
    title: card.titleEn,
    titleZh: card.titleZh,
    category: card.categorySlug,
    author: card.authorName,
    source: card.sourceUrl,
    image: imagePath,
    prompt,
  });
}

const categories = new Map();
for (const record of records) {
  const list = categories.get(record.category) ?? [];
  list.push(record);
  categories.set(record.category, list);
}

const markdown = [
  '# Community X Prompts',
  '',
  ...[...categories].flatMap(([category, entries]) => [
    `## ${category.replaceAll('-', ' ')}`,
    '',
    ...entries.flatMap((entry) => [
      `### ${String(entry.number).padStart(3, '0')} · ${entry.title}`,
      '',
      ...(entry.image ? [`<img src="../../${entry.image}" alt="${entry.title}" width="100%">`, ''] : []),
      '```text',
      entry.prompt || 'Prompt available in the original post.',
      '```',
      '',
      `[${entry.author ?? 'Source'}](${entry.source})`,
      '',
    ]),
  ]),
].join('\n');

await mkdir('docs/prompts', { recursive: true });
await writeFile('data/community-x-prompts.json', `${JSON.stringify(records, null, 2)}\n`);
await writeFile('docs/prompts/community-x.md', markdown);
console.log(`Imported ${records.length} community X prompts.`);
