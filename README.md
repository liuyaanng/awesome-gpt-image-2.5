<div align="center">

# Awesome GPT Image 2.5

**Visual showcases, creative workflows, prompts, comparisons, and practical notes for GPT Image 2.5.**

[English](./README.md) · [简体中文](./README.zh-CN.md) · [Official launch](https://openai.com/index/introducing-chatgpt-images-2-5/)

</div>

## What is GPT Image 2.5?

GPT Image 2.5 is OpenAI's latest image generation and editing family. In ChatGPT it appears as **ChatGPT Images 2.5**. In the API it is available as **GPT-Image-2.5 Flare** and **GPT-Image-2.5 Sunburst**.

The release focuses on the parts of image creation that usually require the most iteration: preserving a reference, changing only what was requested, maintaining quality across multiple edits, and following more complex visual directions.

### Core capabilities

| Capability | What it enables |
| --- | --- |
| Image generation | Create photographs, illustrations, posters, product images, UI concepts, diagrams, and other visual assets from text and image inputs. |
| Reference fidelity | Carry recognizable subjects and distinctive details from reference photos into new settings, styles, and compositions. |
| Precise editing | Change a product, background, outfit, object, or piece of copy while preserving the surrounding image. |
| Multi-turn consistency | Build on previous edits with less drift and less degradation over a longer conversation. |
| Complex visual direction | Better handle structured layouts, real-world information, transparent backgrounds, and specific artistic styles. |

### GPT Image 2.5 vs GPT Image 2

| Area | GPT Image 2 | GPT Image 2.5 |
| --- | --- | --- |
| Visual quality | Fast, high-quality generation and editing | Sharper details, more natural lighting, richer textures, and stronger style adherence |
| Reference images | High-fidelity image inputs | Better subject recognition and preservation across transformations |
| Editing | Generate and edit images | More reliably changes only the requested element while keeping the rest intact |
| Multi-turn work | Conversational editing through the Responses API | Better preservation of earlier changes and image quality across turns |
| Speed | Baseline | Flare delivers about 50% lower latency; Sunburst trades speed for greater precision |
| Quality controls | `low`, `medium`, `high`, `auto` | Adds `xhigh` and `max` alongside existing quality levels |

Use **Flare** for fast iteration, social content, prototyping, and high-volume generation. Use **Sunburst** when edit precision, typography, product imagery, or polished campaign work matters more than latency.

Sources: [OpenAI launch article](https://openai.com/index/introducing-chatgpt-images-2-5/) · [Image generation guide](https://developers.openai.com/api/docs/guides/image-generation) · [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare) · [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst) · [GPT Image 2](https://developers.openai.com/api/docs/models/gpt-image-2)

## Browse

- [Official gallery](#official-gallery) — launch images and editing examples from OpenAI
- [Community showcases](#community-showcases) — finished experiments and creative projects
- [Workflows](#workflows) — useful processes you can reproduce
- [Comparisons and limitations](#comparisons-and-limitations) — benchmarks, trade-offs, and failures

## Official gallery

### Design, typography, and information

<p align="center">
  <img src="images/official/mid-century-modern-posters.webp" width="32%" alt="Nine mid-century posters">
  <img src="images/official/wedding-invitation.webp" width="32%" alt="Ornate wedding invitation">
  <img src="images/official/vintage-national-park-stamps.webp" width="32%" alt="Vintage national park stamps">
</p>
<p align="center">
  <img src="images/official/solar-flare-presentation.webp" width="32%" alt="Solar flare presentation">
  <img src="images/official/sticker-poster.webp" width="32%" alt="Vintage sticker poster">
  <img src="images/official/travel-infographic.webp" width="32%" alt="Chinese travel infographic">
</p>

### Styles and worlds

<p align="center">
  <img src="images/official/retrofuturism.webp" width="32%" alt="Retrofuturistic space habitat">
  <img src="images/official/impressionist-cityscape.webp" width="32%" alt="Impressionist cityscape">
  <img src="images/official/sci-fi-surrealism.webp" width="32%" alt="Science-fiction surrealism">
</p>
<p align="center">
  <img src="images/official/cyberpunk-city.webp" width="32%" alt="Cyberpunk city">
  <img src="images/official/earth-mosaic.webp" width="32%" alt="Earth tile mosaic">
  <img src="images/official/80s-headshot.webp" width="32%" alt="1980s portrait">
</p>

### Reference-led editing

**Change the outfit, preserve the person**

| Input | Edited |
| :---: | :---: |
| <img src="images/official/portrait-before.webp" alt="Original child portrait"> | <img src="images/official/portrait-after.webp" alt="Child portrait with an edited suit"> |

**Change the action, preserve the room**

| Input | Edited |
| :---: | :---: |
| <img src="images/official/making-bed-before.webp" alt="Unmade bed"> | <img src="images/official/making-bed-after.webp" alt="The same bedroom with the bed made"> |

**Add a costume, preserve the subject and scene**

| Input | Edited |
| :---: | :---: |
| <img src="images/official/dog-before.webp" alt="Dog on a patio"> | <img src="images/official/dog-after.webp" alt="The same dog wearing a stunt suit"> |

All images in this section come from OpenAI's [ChatGPT Images 2.5 launch](https://openai.com/index/introducing-chatgpt-images-2-5/).

## Community showcases

### 001 · A 36-frame stop-motion hatchling

`Stop motion` `Character consistency` `Image sequence` `Codex`

<p align="center">
  <img src="images/showcase/stop-motion-ivanainai.gif" width="640" alt="A small turquoise dragon hatching from an egg in a stop-motion loop">
</p>

Ivana generated **36 images with GPT Image 2.5** and stitched them together in Codex as a six-second stop-motion sequence. No video model was used.

This is a useful example of treating an image model as a sequence renderer rather than a single-frame generator. The result depends on character, material, camera, lighting, and background consistency across many images.

[Original post by @ivanainai](https://x.com/ivanainai/status/2097446105906553188) · [MP4](images/showcase/stop-motion-ivanainai.mp4)

## Workflows

### Reference-led product photography

`Photography` `Product` `Reference image` `Character consistency`

<img src="images/community/photorealistic-ugc-workflow.jpg" alt="Reference-led photorealistic UGC example" width="100%">

The workflow shared by [@Mho_23](https://x.com/Mho_23/status/2097483045221917131):

1. Choose a reference photo with the color grade and creative direction you want.
2. Turn its lighting, palette, contrast, grain, lens, and composition into a detailed style brief.
3. Give GPT Image 2.5 that brief, your product image, and a precise placement instruction.
4. Save the strongest character result and attach it to later generations to preserve the same face.

The reference controls the visual treatment, the character image anchors identity, and the product image controls what must appear accurately.

### Atomic editing

For reliable edits, describe one change and lock everything else:

```text
Keep everything in this photo the same, but replace the broken mug with a clean
one. Match its size, angle, lighting, and shadow.
```

```text
Turn this daytime street photo into a rainy evening. Keep every building, car,
and person exactly where they are. Change only the weather and lighting.
```

More examples in [@cgtwts' original thread](https://x.com/cgtwts/status/2097456916335383025).

## Comparisons and limitations

### Same complex prompt: GPT Image 2 vs 2.5

<img src="images/community/gpt-image-2-vs-2-5-forest.jpg" alt="GPT Image 2 and GPT Image 2.5 forest comparison" width="100%">

In this run, GPT Image 2.5 produced sharper detail and richer textures and was nearly twice as fast, but also introduced more visual noise. [Original post by @TimJayas](https://x.com/TimJayas/status/2097442532980634096).

### Better does not mean exact

<img src="images/community/editing-failure-case.jpg" alt="Ground truth compared with GPT Image 2 and GPT Image 2.5 diagram edits" width="100%">

GPT Image 2.5 improved this diagram edit but still invented lines that were not present in the ground truth. Diagrams, UI, typography, and infographics still need careful verification. [Original post by @pigeon__s](https://x.com/pigeon__s/status/2097412201778966629).

---

Official gallery: OpenAI · Community examples: their linked creators · Repository text: MIT
