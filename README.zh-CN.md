<div align="center">

# Awesome GPT Image 2.5

**GPT Image 2.5 的视觉案例、创作工作流、Prompt、模型对比与实用记录。**

[English](./README.md) · [简体中文](./README.zh-CN.md) · [官方介绍](https://openai.com/index/introducing-chatgpt-images-2-5/)

</div>

<img src="images/cover/awesome-gpt-image-2.5-cover.webp" width="100%" alt="Awesome GPT Image 2.5：视觉案例、工作流与 Prompt">

## GPT Image 2.5 是什么？

GPT Image 2.5 是 OpenAI 最新的图片生成与编辑模型系列。在 ChatGPT 中，它以 **ChatGPT Images 2.5** 提供；在 API 中，则分为 **GPT-Image-2.5 Flare** 和 **GPT-Image-2.5 Sunburst**。

这次更新主要解决图片创作中最需要反复调整的问题：保持参考图主体、只改变指定内容、多轮编辑不漂移，以及更准确地执行复杂视觉要求。

### 核心能力

| 能力 | 可以做什么 |
| --- | --- |
| 图片生成 | 根据文字和图片输入生成摄影、插画、海报、商品图、UI 概念、图解等视觉内容。 |
| 参考图保真 | 把参考照片中可识别的主体和独特细节带入新场景、新风格和新构图。 |
| 精确编辑 | 替换商品、背景、服装、物体或文案，同时尽量保持周围画面不变。 |
| 多轮一致性 | 在较长的编辑对话中延续之前的修改，减少漂移和画质衰减。 |
| 复杂视觉指令 | 更好地处理结构化版式、现实信息、透明背景和特定艺术风格。 |

### GPT Image 2.5 与 GPT Image 2 对比

| 对比项 | GPT Image 2 | GPT Image 2.5 |
| --- | --- | --- |
| 视觉质量 | 快速、高质量的图片生成和编辑 | 细节更清晰，光线更自然，材质更丰富，风格遵循更强 |
| 参考图片 | 支持高保真图片输入 | 转换过程中更好地识别并保持主体特征 |
| 图片编辑 | 支持生成与编辑 | 更可靠地只修改指定元素，并保持其他内容不变 |
| 多轮工作 | 可通过 Responses API 对话式编辑 | 更好地保留之前的修改和画质 |
| 速度 | 对比基准 | Flare 延迟约低 50%；Sunburst 用更长时间换取更高精度 |
| 质量档位 | `low`、`medium`、`high`、`auto` | 在原有档位上增加 `xhigh` 和 `max` |

需要快速迭代、社交内容、原型和大批量生成时使用 **Flare**。精确编辑、文字排版、商品图或营销成片优先使用 **Sunburst**。

资料来源：[OpenAI 发布文章](https://openai.com/index/introducing-chatgpt-images-2-5/) · [图片生成指南](https://developers.openai.com/api/docs/guides/image-generation) · [Flare](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare) · [Sunburst](https://developers.openai.com/api/docs/models/gpt-image-2.5-sunburst) · [GPT Image 2](https://developers.openai.com/api/docs/models/gpt-image-2)

## 分类浏览

- [官方视觉墙](#官方视觉墙) — OpenAI 成图、Prompt 与编辑案例
- [模型对比与局限](#模型对比与局限) — 效果差异、取舍和失败案例
- [Community Showcase](#community-showcase) — 完成度高的社区实验与创作项目
- [工作流](#工作流) — 可以复现的创作方法

## 官方视觉墙

### 纪实摄影

<img src="images/official/prompting/sailor-photography-sunburst.webp" alt="GPT Image 2.5 Sunburst 纪实水手摄影" width="100%">

```text
Create a photorealistic candid photograph of an elderly sailor standing on a small fishing boat. He has weathered skin with visible wrinkles, pores, and sun texture, and a few faded traditional sailor tattoos on his arms. He is calmly adjusting a net while his dog sits nearby on the deck. Shot like a 35mm film photograph, medium close-up at eye level, using a 50mm lens. Soft coastal daylight, shallow depth of field, subtle film grain, natural color balance. The image should feel honest and unposed, with real skin texture, worn materials, and everyday detail. No glamorization, no heavy retouching.
```

[OpenAI](https://developers.openai.com/api/docs/guides/image-prompting#control-style-and-lighting)

### 流程信息图

<img src="images/official/prompting/coffee-machine-infographic-sunburst.webp" alt="GPT Image 2.5 Sunburst 咖啡机流程信息图" width="100%">

```text
Create a detailed Infographic of the functioning and flow of an automatic coffee machine like a Jura. From bean basket, to grinding, to scale, water tank, boiler, etc. I'd like to understand technically and visually the flow.
```

[OpenAI](https://developers.openai.com/api/docs/guides/image-prompting#explain-a-process-visually)

### 精准文字广告图

<img src="images/official/prompting/thread-campaign-sunburst.webp" alt="GPT Image 2.5 Sunburst Thread 街头服饰广告" width="100%">

```text
Give me a cool in culture ad / fashion shot for a brand called Thread. It's a hip young street brand. The ad shows a group of friends hanging out together with the tagline "Yours to Create." Make it feel like a polished campaign image for a youth streetwear audience: stylish, contemporary, energetic, and tasteful. Use clean composition, strong color direction, natural poses, and premium fashion photography cues. Render the tagline exactly once, clearly and legibly, integrated into the ad layout. No extra text, no watermarks, no unrelated logos.
```

[OpenAI](https://developers.openai.com/api/docs/guides/image-prompting#render-exact-text)

### 透明背景 Logo

<img src="images/official/prompting/field-and-flour-logo-sunburst.webp" alt="GPT Image 2.5 Sunburst Field and Flour 面包店 Logo" width="100%">

```text
Create an original, non-infringing logo for a company called Field & Flour, a local bakery. The logo should feel warm, simple, and timeless. Use clean, vector-like shapes, a strong silhouette, and balanced negative space. Favor simplicity over detail so it reads clearly at small and large sizes. Flat design, minimal strokes, no gradients unless essential. Fully transparent background. Deliver a single centered logo with generous padding, clean alpha edges, and no solid backdrop, scenery, checkerboard, or watermark.
```

[OpenAI](https://developers.openai.com/api/docs/guides/image-prompting#design-a-reusable-logo)

### 移动端应用概念稿

<img src="images/official/prompting/farmers-market-ui-sunburst.webp" alt="GPT Image 2.5 Sunburst 农夫市集移动端应用概念稿" width="100%">

```text
Create a realistic mobile app UI mockup for a local farmers market. Show today’s market with a simple header, a short list of vendors with small photos and categories, a small “Today’s specials” section, and basic information for location and hours. Design it to be practical, and easy to use. White background, subtle natural accent colors, clear typography, and minimal decoration. It should look like a real, well-designed, beautiful app for a small local market. Place the UI mockup in an iPhone frame.
```

[OpenAI](https://developers.openai.com/api/docs/guides/image-prompting#create-an-interface-preview)

### 翻译且保持版式

<img src="images/official/prompting/coffee-machine-spanish-sunburst.webp" alt="GPT Image 2.5 Sunburst 西班牙语咖啡机信息图" width="100%">

```text
Translate the text in the infographic to Spanish. Do not change any other aspect of the image.
```

[OpenAI](https://developers.openai.com/api/docs/guides/image-prompting#translate-while-preserving-layout)

### 换装但保持身份

<img src="images/official/prompting/outfit-edit-sunburst.webp" alt="GPT Image 2.5 Sunburst 保持身份的换装编辑" width="100%">

```text
Edit the image to dress the woman using the provided clothing images. Do not change her face, facial features, skin tone, body shape, pose, or identity in any way. Preserve her exact likeness, expression, hairstyle, and proportions. Replace only the clothing, fitting the garments naturally to her existing pose and body geometry with realistic fabric behavior. Match lighting, shadows, and color temperature to the original photo so the outfit integrates photorealistically, without looking pasted on. Do not change the background, camera angle, framing, or image quality, and do not add accessories, text, logos, or watermarks.
```

[OpenAI](https://developers.openai.com/api/docs/guides/image-prompting#preserve-identity-and-change-clothing)

### 商品透明背景抠图

<img src="images/official/prompting/product-cutout-sunburst.webp" alt="GPT Image 2.5 Sunburst 商品透明背景抠图" width="100%">

```text
Extract the product from the input image and isolate it on a fully transparent background. Output: centered product, crisp silhouette, no halos/fringing. Preserve product geometry and label legibility exactly. Add only light polishing. Do not add a solid backdrop, checkerboard, scenery, or shadow. Do not restyle the product; remove the background and preserve clean alpha transparency.
```

[OpenAI](https://developers.openai.com/api/docs/guides/image-prompting#create-a-transparent-product-cutout)

### 发布视觉案例

#### 设计、文字与信息表达

<p align="center">
  <img src="images/official/mid-century-modern-posters.webp" width="32%" alt="九张中世纪现代风格海报">
  <img src="images/official/wedding-invitation.webp" width="32%" alt="婚礼邀请函">
  <img src="images/official/vintage-national-park-stamps.webp" width="32%" alt="国家公园邮票">
</p>
<p align="center">
  <img src="images/official/solar-flare-presentation.webp" width="32%" alt="太阳耀斑演示文稿">
  <img src="images/official/sticker-poster.webp" width="32%" alt="复古贴纸海报">
  <img src="images/official/travel-infographic.webp" width="32%" alt="中文旅行信息图">
</p>

#### 风格与世界构建

<p align="center">
  <img src="images/official/retrofuturism.webp" width="32%" alt="复古未来主义太空城市">
  <img src="images/official/impressionist-cityscape.webp" width="32%" alt="印象派城市景观">
  <img src="images/official/sci-fi-surrealism.webp" width="32%" alt="科幻超现实主义">
</p>
<p align="center">
  <img src="images/official/cyberpunk-city.webp" width="32%" alt="赛博朋克城市">
  <img src="images/official/earth-mosaic.webp" width="32%" alt="地球马赛克">
  <img src="images/official/80s-headshot.webp" width="32%" alt="80 年代肖像">
</p>

#### 参考图编辑

**替换服装，保持人物**

| 输入图 | 编辑结果 |
| :---: | :---: |
| <img src="images/official/portrait-before.webp" alt="原始儿童肖像"> | <img src="images/official/portrait-after.webp" alt="更换礼服后的儿童肖像"> |

**改变动作，保持房间**

| 输入图 | 编辑结果 |
| :---: | :---: |
| <img src="images/official/making-bed-before.webp" alt="没有整理的床"> | <img src="images/official/making-bed-after.webp" alt="同一个房间中整理好的床"> |

**增加服装，保持主体和场景**

| 输入图 | 编辑结果 |
| :---: | :---: |
| <img src="images/official/dog-before.webp" alt="露台上的狗"> | <img src="images/official/dog-after.webp" alt="穿着特技服装的同一只狗"> |

本节图片均来自 OpenAI 的 [ChatGPT Images 2.5 发布文章](https://openai.com/index/introducing-chatgpt-images-2-5/)。

## 模型对比与局限

### GPT Image 2 与 GPT Image 2.5 Sunburst

`同一 Prompt` `时尚广告` `低机位构图` `社区案例`

| GPT Image 2.0 | GPT Image 2.5 Sunburst |
| :---: | :---: |
| <img src="images/comparisons/virtual-fashion-campaign-a.jpg" alt="GPT Image 2.0 虚拟时尚广告"> | <img src="images/comparisons/virtual-fashion-campaign-b.jpg" alt="GPT Image 2.5 Sunburst 虚拟时尚广告"> |

同一份创意简报要求生成一组虚构时尚品牌广告：六个人分别穿电蓝、番茄红、青绿色、热情粉、黄油黄和淡紫色服装，从地面使用倾斜的 24 毫米镜头拍摄，背景是钴蓝色天空。

两张图都保留了整体创意方向，但人物、姿势、服装细节和环境在不同生成中发生了变化。这个案例适合做视觉参考，但不是严格 benchmark：原帖没有提供 seed、完整 API 参数或逐模型重试协议。

来源：[@3three_AI](https://x.com/3three_AI/status/2097575621870399517)。图片中的模型标签属于原帖内容。

### 九宫格发型参考

`同一 Prompt` `肖像` `一致性` `社区案例`

<img src="images/comparisons/3three-ai/hair-grid.jpg" alt="GPT Image 2.0 与 GPT Image 2.5 九宫格发型对比" width="100%">

Prompt：根据输入人物生成九宫格发型参考图，并找出最适合这个人物的发型。原帖指出，GPT Image 2.0 的 9 个发型中有多个重复或相似，而 GPT Image 2.5 的设计差异更明显，发际线、碎发和层次感也更自然。

来源：[@3three_AI](https://x.com/3three_AI/status/2097483692998635856)。

### 意式浓缩咖啡机剖面图

`同一 Prompt` `工程图` `文字排版` `社区案例`

| GPT Image 2.0 | GPT Image 2.5 |
| :---: | :---: |
| <img src="images/comparisons/3three-ai/espresso-gpt-image-2.jpg" alt="GPT Image 2.0 意式浓缩咖啡机剖面图"> | <img src="images/comparisons/3three-ai/espresso-gpt-image-2-5.jpg" alt="GPT Image 2.5 意式浓缩咖啡机剖面图"> |

Prompt 要求生成一张 1960 年代机械制图风格的家用浓缩咖啡机剖面图，包含 14 条编号引线、右侧零件列表、厘米比例尺和标题 `Fig. 3: Sectional View - Model C2`。这个案例适合观察复杂结构、编号和密集文字的稳定性。

来源：[@3three_AI](https://x.com/3three_AI/status/2097575614341628370)。

### 手绘日本动画电影截图

`同一 Prompt` `风格转换` `人物` `社区案例`

| GPT Image 2.0 | GPT Image 2.5 Sunburst |
| :---: | :---: |
| <img src="images/comparisons/3three-ai/anime-gpt-image-2.jpg" alt="GPT Image 2.0 手绘日本动画电影截图"> | <img src="images/comparisons/3three-ai/anime-gpt-image-2-5.jpg" alt="GPT Image 2.5 Sunburst 手绘日本动画电影截图"> |

Prompt 描述一帧 1990 年代末手绘日本动画：海边两名持刀人物对峙，樱花从画面中飘过。它同时测试风格、氛围、人物调度和环境细节。

来源：[@3three_AI](https://x.com/3three_AI/status/2097575618166788158)。

### 1960 年代周日报纸漫画

`同一 Prompt` `多格叙事` `文字排版` `社区案例`

| GPT Image 2.0 | GPT Image 2.5 Sunburst |
| :---: | :---: |
| <img src="images/comparisons/3three-ai/newspaper-gpt-image-2.jpg" alt="GPT Image 2.0 周日报纸漫画"> | <img src="images/comparisons/3three-ai/newspaper-gpt-image-2-5.jpg" alt="GPT Image 2.5 Sunburst 周日报纸漫画"> |

这个对比使用 1960 年代周日报纸漫画的创作要求：六格叙事、重复人物、对白气泡、拟声词和复古印刷质感。它适合观察连续构图和文字位置控制。

来源：[@3three_AI](https://x.com/3three_AI/status/2097575625666289844)。

### 同一个复杂 Prompt：GPT Image 2 与 2.5

<img src="images/community/gpt-image-2-vs-2-5-forest.jpg" alt="GPT Image 2 与 GPT Image 2.5 森林对比" width="100%">

这次生成中，GPT Image 2.5 的细节和材质更丰富，速度接近两倍，但复杂场景中的视觉噪点也更多。[查看 @TimJayas 原帖](https://x.com/TimJayas/status/2097442532980634096)。

### 更好不代表完全准确

<img src="images/community/editing-failure-case.jpg" alt="标准答案与 GPT Image 2、GPT Image 2.5 图解编辑结果对比" width="100%">

GPT Image 2.5 改善了这个图解编辑结果，但仍然添加了标准答案中不存在的线条。图解、UI、文字和信息图仍然需要仔细检查。[查看 @pigeon__s 原帖](https://x.com/pigeon__s/status/2097412201778966629)。

## Community Showcase

### 001 · 36 帧小龙破壳定格动画

`定格动画` `角色一致性` `图片序列` `Codex`

<p align="center">
  <img src="images/showcase/stop-motion-ivanainai.gif" width="640" alt="一只青绿色小龙从蛋中孵化的定格动画">
</p>

Ivana 使用 **GPT Image 2.5 生成了 36 张图片**，再通过 Codex 把它们拼接成一段 6 秒定格动画，全程没有使用视频模型。

这个案例展示了图片模型在单张生成之外的用法：把它作为连续画面的渲染器。最终效果取决于角色、材质、相机、光线和背景在几十张图片中的一致性。

[查看 @ivanainai 原帖](https://x.com/ivanainai/status/2097446105906553188) · [MP4 文件](images/showcase/stop-motion-ivanainai.mp4)

### 002 · 毛毛虫化蝶定格动画

`定格动画` `形态变化` `场景一致性` `图片序列`

<p align="center">
  <img src="images/showcase/stop-motion-charlierguo.gif" width="480" alt="毛毛虫结蛹并羽化成蝴蝶的定格动画">
</p>

Charlie Guo 分享了一段约 10 秒的 GPT Image 2.5 定格动画，连续展示毛毛虫结蛹并最终羽化成蝴蝶的过程。

树枝、桌面、相机和光线保持固定，让主体在连续变化时仍然容易理解。这个案例简洁地展示了如何使用生成图片组织时间过程。

[查看 @charlierguo 原帖](https://x.com/charlierguo/status/2097399137142772071) · [MP4 文件](images/showcase/stop-motion-charlierguo.mp4)

### 003 · 十秒动漫战斗序列

`图片序列` `动作连续性` `角色一致性` `现有角色`

<p align="center">
  <img src="images/showcase/image-sequence-chetaslua.gif" width="720" alt="两个可识别的动漫角色在岩石场景中完成高强度战斗序列">
</p>

Chetaslua 发布了一段由 GPT Image 2.5 图像组成的 10 秒动画。它使用可识别的现有动漫角色，从对峙开始，连续展示蓄力、冲刺、碰撞、能量效果和战斗结束后的画面。

这个案例适合观察较长图片序列中的动作连续性、机位推进、特效和背景稳定性。原帖没有公开图片数量、Prompt 或拼接方法。

[查看 @chetaslua 原帖](https://x.com/chetaslua/status/2097577048651022348) · [MP4 文件](images/showcase/image-sequence-chetaslua.mp4)

## 工作流

### 使用参考图控制商品摄影

`摄影` `商品` `参考图` `角色一致性`

<img src="images/community/photorealistic-ugc-workflow.jpg" alt="使用参考图生成的写实 UGC 案例" width="100%">

[@Mho_23 分享的流程](https://x.com/Mho_23/status/2097483045221917131)：

1. 选择一张拥有目标色彩和创意方向的参考照片；
2. 把它的光线、配色、对比度、颗粒、镜头和构图整理成详细风格说明；
3. 把风格说明、商品图和准确的摆放要求一起交给 GPT Image 2.5；
4. 保存最满意的人物图片，后续每次生成都附上它，以保持同一张脸。

风格参考控制视觉处理，人物参考保持身份一致，商品图保证产品准确。

### 原子编辑

为了让编辑结果稳定，每次只描述一个变化，并锁定其他内容：

```text
保持照片中所有内容不变，只把破损的杯子替换成一个完好的杯子。
匹配原来的尺寸、角度、光线和阴影。
```

```text
把白天的街道照片变成雨夜。保持每栋建筑、车辆和人物的位置完全不变，
只改变天气和光线。
```

更多例子见 [@cgtwts 的原始帖子](https://x.com/cgtwts/status/2097456916335383025)。

---

官方视觉墙：OpenAI · 社区案例：链接中的原作者 · 本仓库文字：MIT
