<div align="center">

# Awesome GPT Image 2.5

**GPT Image 2.5 的视觉案例、创作工作流、Prompt、模型对比与实用记录。**

[English](./README.md) · [简体中文](./README.zh-CN.md) · [官方介绍](https://openai.com/index/introducing-chatgpt-images-2-5/)

</div>

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

- [官方视觉墙](#官方视觉墙) — OpenAI 发布案例和编辑对比
- [Community Showcase](#community-showcase) — 完成度高的社区实验与创作项目
- [工作流](#工作流) — 可以复现的创作方法
- [模型对比与局限](#模型对比与局限) — 效果差异、取舍和失败案例

## 官方视觉墙

### 设计、文字与信息表达

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

### 风格与世界构建

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

### 参考图编辑

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

## Community Showcase

### 001 · 36 帧小龙破壳定格动画

`定格动画` `角色一致性` `图片序列` `Codex`

<p align="center">
  <img src="images/showcase/stop-motion-ivanainai.gif" width="640" alt="一只青绿色小龙从蛋中孵化的定格动画">
</p>

Ivana 使用 **GPT Image 2.5 生成了 36 张图片**，再通过 Codex 把它们拼接成一段 6 秒定格动画，全程没有使用视频模型。

这个案例展示了图片模型在单张生成之外的用法：把它作为连续画面的渲染器。最终效果取决于角色、材质、相机、光线和背景在几十张图片中的一致性。

[查看 @ivanainai 原帖](https://x.com/ivanainai/status/2097446105906553188) · [MP4 文件](images/showcase/stop-motion-ivanainai.mp4)

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

## 模型对比与局限

### 同一个复杂 Prompt：GPT Image 2 与 2.5

<img src="images/community/gpt-image-2-vs-2-5-forest.jpg" alt="GPT Image 2 与 GPT Image 2.5 森林对比" width="100%">

这次生成中，GPT Image 2.5 的细节和材质更丰富，速度接近两倍，但复杂场景中的视觉噪点也更多。[查看 @TimJayas 原帖](https://x.com/TimJayas/status/2097442532980634096)。

### 更好不代表完全准确

<img src="images/community/editing-failure-case.jpg" alt="标准答案与 GPT Image 2、GPT Image 2.5 图解编辑结果对比" width="100%">

GPT Image 2.5 改善了这个图解编辑结果，但仍然添加了标准答案中不存在的线条。图解、UI、文字和信息图仍然需要仔细检查。[查看 @pigeon__s 原帖](https://x.com/pigeon__s/status/2097412201778966629)。

---

官方视觉墙：OpenAI · 社区案例：链接中的原作者 · 本仓库文字：MIT
