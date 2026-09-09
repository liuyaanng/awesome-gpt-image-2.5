<div align="center">

# Awesome GPT Image 2.5

**The best GPT Image 2.5 examples, prompts, and practical techniques.**

[English](./README.md) · [简体中文](./README.zh-CN.md) · [Official launch](https://openai.com/index/introducing-chatgpt-images-2-5/)

</div>

<p align="center">
  <img src="images/official/retrofuturism.webp" width="32%" alt="Retrofuturistic space habitat">
  <img src="images/official/mid-century-modern-posters.webp" width="32%" alt="Nine mid-century posters">
  <img src="images/official/wedding-invitation.webp" width="32%" alt="Ornate wedding invitation">
</p>
<p align="center">
  <img src="images/official/vintage-national-park-stamps.webp" width="32%" alt="Vintage national park stamps">
  <img src="images/official/solar-flare-presentation.webp" width="32%" alt="Solar flare presentation">
  <img src="images/official/sticker-poster.webp" width="32%" alt="Vintage sticker poster">
</p>

<p align="center"><sub>Images from OpenAI's official ChatGPT Images 2.5 launch.</sub></p>

## Start here

**Flare** is the fast default for most work. **Sunburst** takes longer but gives you tighter control for detailed edits, product images, typography, and polished campaign work.

`Photography` · `Posters` · `Typography` · `Infographics` · `Editing` · `Reference fidelity` · `Multi-turn`

The prompts below are practical recreations written for this collection. Copy them, replace the subject or copy, and make them yours.

## 1. Nine posters, one visual system

`Poster` `Typography` `Complex layout` `Sunburst`

<img src="images/official/mid-century-modern-posters.webp" alt="Nine mid-century modern posters" width="100%">

```text
Create a 3 × 3 contact sheet of nine original mid-century modern posters.

Use one consistent visual system across the set: warm white paper, black,
sunflower yellow, coral red, cobalt blue, and forest green. Combine bold
geometric forms, simple faces, flowers, stairs, circles, and sun motifs.

Each poster must contain exactly one short phrase, shown once:
"CREATE" · "LISTEN MORE" · "FIND YOUR BALANCE" · "DRINK MORE WATER"
"LEARN SOMETHING NEW" · "SEE THE BEAUTY" · "GROW TOGETHER" ·
"CHOOSE KINDNESS" · "MAKE SPACE"

Keep every tile distinct but clearly part of the same collection. Crisp print,
clean kerning, no mockup frames, no logos, no extra text, no watermarks.
```

## 2. An infographic people can actually read

`Infographic` `Presentation` `Typography` `Sunburst`

<img src="images/official/solar-flare-presentation.webp" alt="Presentation explaining solar flares" width="100%">

```text
Design a premium 16:9 presentation slide titled "What Causes Solar Flares?"

Place a large, scientifically recognizable Sun on the right. On the left,
explain the process in four numbered steps with a small diagram for each:
1. MAGNETIC FIELD TWISTING
2. SUNSPOT ACTIVITY
3. MAGNETIC RECONNECTION
4. ENERGY RELEASE

Use a black background, solar orange highlights, warm white typography, and a
clear editorial grid. Make the title readable at thumbnail size. Keep body copy
short and factual. No invented statistics, tiny text, logos, or extra sections.
```

## 3. A dense travel guide

`Infographic` `Chinese text` `Complex layout` `Multi-turn`

<img src="images/official/travel-infographic.webp" alt="Chinese travel itinerary infographic" width="100%">

```text
Create a polished two-day travel itinerary for Chongqing in Simplified Chinese.

Use a wide two-column editorial layout. The left column contains three numbered
attractions with real-photo thumbnails, one-sentence descriptions, and practical
visit durations. Add a compact row of four local foods at the bottom. The right
column is a readable timeline split into "DAY 1（上午→晚上）" and "DAY 2（半天）".

Style: clean contemporary travel magazine, white background, dark navy text,
green and orange accents, thin rules, generous spacing. Keep all Chinese text
legible. Do not invent addresses or prices. No logos or watermarks.
```

**Editing trick:** generate the structure first. In the next turn, fix only incorrect copy while explicitly asking the model to preserve every image, color, spacing value, and layout position.

## 4. A convincing throwback portrait

`Photography` `Portrait` `Reference image` `Flare`

<img src="images/official/80s-headshot.webp" alt="1980s-style portrait" width="100%">

```text
Using the person in the reference photo, create an authentic late-1980s mall
portrait. Preserve their recognizable face, skin tone, hair texture, age, and
facial proportions.

Wardrobe: teal, navy, and dusty-pink windbreaker with a small gold chain.
Scene: soft neon tubes, a silver boombox, mottled studio backdrop.
Camera: consumer color film, direct softbox, gentle halation, realistic grain,
slightly warm skin tones, period-accurate styling.

Do not beautify or reshape the face. No modern objects, text, logos, or watermark.
```

## 5. Change the outfit, keep the person

`Editing` `Identity preservation` `Sunburst`

| Input | Edited |
| :---: | :---: |
| <img src="images/official/portrait-before.webp" alt="Original child portrait"> | <img src="images/official/portrait-after.webp" alt="Child portrait with edited suit"> |

```text
Change only the child's outfit to an ivory tuxedo with black lapels and a black
bow tie. Preserve the child's face, expression, hair, body position, hands,
camera angle, printed-photo texture, blue background, lighting, shadows, and
framing exactly. Fit the clothing naturally to the existing pose. Do not retouch
the face, change the pose, add accessories, or redesign the background.
```

## 6. Edit the action, preserve the room

`Editing` `Scene consistency` `Sunburst`

| Input | Edited |
| :---: | :---: |
| <img src="images/official/making-bed-before.webp" alt="Unmade bed"> | <img src="images/official/making-bed-after.webp" alt="Same bedroom with bed made"> |

```text
Make only the bed: smooth the white bedding and arrange the existing pillows
neatly against the headboard. Preserve the bed frame, room, lamps, bedside
tables, walls, objects, camera angle, crop, exposure, lighting, and shadows.
Do not clean, move, add, remove, or redesign anything else in the room.
```

## 7. Turn a pet into a stunt performer

`Editing` `Reference fidelity` `Character` `Flare`

| Input | Edited |
| :---: | :---: |
| <img src="images/official/dog-before.webp" alt="Dog on a patio"> | <img src="images/official/dog-after.webp" alt="Same dog wearing a stunt suit"> |

```text
Dress the dog in a fitted white 1970s stunt-performer suit and helmet with red
and blue stripes and small star details. Add one chest patch reading "STUNTMAN".
Preserve the exact dog, face, fur, body proportions, stance, leash, patio,
chairs, sunlight, shadows, camera position, and framing. The costume must follow
the dog's anatomy naturally. Change nothing else.
```

## Three techniques worth remembering

1. **For edits, write a contract:** say what may change, then list what must stay unchanged.
2. **For text, quote exact copy:** specify how many times it appears, its hierarchy, and forbid extra text.
3. **For multi-turn work, make one change per turn:** repeat the invariant list every time.

## More visual directions

<p align="center">
  <img src="images/official/sci-fi-surrealism.webp" width="32%" alt="Science-fiction surrealism">
  <img src="images/official/impressionist-cityscape.webp" width="32%" alt="Impressionist cityscape">
  <img src="images/official/earth-mosaic.webp" width="32%" alt="Earth tile mosaic">
</p>
<p align="center">
  <img src="images/official/cyberpunk-city.webp" width="32%" alt="Cyberpunk city">
  <img src="images/official/80s-headshot.webp" width="32%" alt="1980s portrait">
  <img src="images/official/travel-infographic.webp" width="32%" alt="Travel infographic">
</p>

## Fresh from X

### Same prompt, GPT Image 2 vs 2.5

`Comparison` `Complex scene` `Textures`

<img src="images/community/gpt-image-2-vs-2-5-forest.jpg" alt="GPT Image 2 and GPT Image 2.5 forest comparison" width="100%">

GPT Image 2.5 produced sharper detail and richer textures and was nearly twice as fast in this run, but also introduced more visual noise. [Original post](https://x.com/TimJayas/status/2097442532980634096) by @TimJayas.

### Reference-led UGC photography

`Photography` `Product` `Reference image` `Workflow`

<img src="images/community/photorealistic-ugc-workflow.jpg" alt="Reference-led photorealistic UGC example" width="100%">

The workflow shared by [@Mho_23](https://x.com/Mho_23/status/2097483045221917131):

1. Find a reference photo with the color grade and creative direction you want.
2. Ask a reasoning model to extract its lighting, palette, contrast, grain, lens, and composition into a detailed style brief.
3. Give that brief, your product image, and a precise placement instruction to GPT Image 2.5.
4. Save the strongest character result and attach it to later generations to preserve the same face.

The useful idea is the separation of responsibilities: one reference controls the visual treatment, another anchors the character, and the product image controls what must appear accurately.

### Keep the failures

`Editing` `Failure analysis` `Diagram`

<img src="images/community/editing-failure-case.jpg" alt="Ground truth compared with GPT Image 2 and GPT Image 2.5 diagram edits" width="100%">

GPT Image 2.5 improved the result but still invented lines that were not present in the ground truth. Diagram, UI, and infographic edits need line-by-line verification. [Original post](https://x.com/pigeon__s/status/2097412201778966629) by @pigeon__s.

### Four atomic edits to copy

Adapted from [12 editing prompts shared by @cgtwts](https://x.com/cgtwts/status/2097456916335383025):

```text
FIX ONE OBJECT
Keep everything in this photo the same, but replace the broken mug with a clean
one. Match its size, angle, lighting, and shadow.

CHANGE ONLY THE WEATHER
Turn this daytime street photo into a rainy evening. Keep every building, car,
and person exactly where they are. Change only the weather and lighting.

CLEAN A PRODUCT PHOTO
Remove the background and place the product on pure white. Do not change its
shape, color, texture, label, or proportions.

EXTEND THE FRAME
Turn this image into 16:9 landscape. Do not crop or resize the subject. Extend
the background naturally on both sides.
```

## What is new in 2.5?

- Better reference-image fidelity and more natural lighting and textures
- More precise single-element edits
- Better quality across multiple editing turns
- Stronger complex-layout and style following
- Up to 50% lower latency than Images 2.0

Use `gpt-image-2.5-flare` for speed and most everyday work. Use `gpt-image-2.5-sunburst` when edit precision matters most. See the [official introduction](https://openai.com/index/introducing-chatgpt-images-2-5/) and [API guide](https://developers.openai.com/api/docs/guides/image-generation).

---

Official showcase images: OpenAI. X examples: their linked authors. Repository prompts and text: MIT.
