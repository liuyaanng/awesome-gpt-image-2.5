<div align="center">

# Awesome GPT Image 2.5

**GPT Image 2.5 精选案例、Prompt 与实用技巧。**

[English](./README.md) · [简体中文](./README.zh-CN.md) · [官方介绍](https://openai.com/index/introducing-chatgpt-images-2-5/)

</div>

<p align="center">
  <img src="images/official/retrofuturism.webp" width="32%" alt="复古未来主义太空城市">
  <img src="images/official/mid-century-modern-posters.webp" width="32%" alt="九张中世纪现代风格海报">
  <img src="images/official/wedding-invitation.webp" width="32%" alt="婚礼邀请函">
</p>
<p align="center">
  <img src="images/official/vintage-national-park-stamps.webp" width="32%" alt="国家公园邮票">
  <img src="images/official/solar-flare-presentation.webp" width="32%" alt="太阳耀斑演示文稿">
  <img src="images/official/sticker-poster.webp" width="32%" alt="复古贴纸海报">
</p>

<p align="center"><sub>图片来自 OpenAI 官方 ChatGPT Images 2.5 发布文章。</sub></p>

## 从这里开始

**Flare** 速度快，适合大部分日常创作。**Sunburst** 生成更慢，但在精确编辑、商品图、文字排版和营销成片上控制更强。

`摄影` · `海报` · `文字排版` · `信息图` · `图片编辑` · `参考图保真` · `多轮编辑`

下面的 Prompt 是本仓库根据案例编写的实用复刻版本。直接复制，替换主题或文案即可使用。

## 1. 九张海报，一套视觉系统

`海报` `文字排版` `复杂版式` `Sunburst`

<img src="images/official/mid-century-modern-posters.webp" alt="九张中世纪现代风格海报" width="100%">

```text
制作一张 3 × 3 的九宫格，包含九张原创的中世纪现代主义海报。

整组使用同一套视觉系统：暖白纸张、黑色、向日葵黄、珊瑚红、钴蓝和森林绿。
把大胆的几何图形、简单人脸、花朵、台阶、圆形和太阳图案组合在一起。

每张海报只能出现以下一句短文案，准确显示一次：
"CREATE" · "LISTEN MORE" · "FIND YOUR BALANCE" · "DRINK MORE WATER"
"LEARN SOMETHING NEW" · "SEE THE BEAUTY" · "GROW TOGETHER" ·
"CHOOSE KINDNESS" · "MAKE SPACE"

九张海报各不相同，但明显属于同一系列。印刷边缘清晰，字距准确。
不要样机边框、Logo、额外文字或水印。
```

## 2. 真正能读的信息图

`信息图` `演示文稿` `文字排版` `Sunburst`

<img src="images/official/solar-flare-presentation.webp" alt="解释太阳耀斑的演示文稿" width="100%">

```text
设计一张高品质 16:9 演示文稿页面，标题为 "What Causes Solar Flares?"。

右侧放置一个巨大且科学外观可信的太阳。左侧使用四个编号步骤解释过程，
每个步骤配一张简洁小图：
1. MAGNETIC FIELD TWISTING
2. SUNSPOT ACTIVITY
3. MAGNETIC RECONNECTION
4. ENERGY RELEASE

使用黑色背景、太阳橙色高光、暖白字体和清晰的编辑网格。
标题在缩略图下也必须可读。正文简短、内容可靠。
不要虚构统计数据、极小文字、Logo 或额外模块。
```

## 3. 高密度中文旅行指南

`信息图` `中文排版` `复杂版式` `多轮编辑`

<img src="images/official/travel-infographic.webp" alt="中文旅行行程信息图" width="100%">

```text
制作一份精致的重庆两日旅行计划，全部使用简体中文。

采用宽幅双栏编辑版式。左栏包含三个编号景点、真实照片缩略图、一句话介绍和
建议游览时长，底部加入四种本地美食。右栏是清晰的时间线，分成
"DAY 1（上午→晚上）" 和 "DAY 2（半天）"。

风格：当代旅行杂志，白色背景、深海军蓝文字、绿色和橙色点缀、细分隔线、
充足留白。所有中文必须清晰可读。不要虚构地址和价格，不要 Logo 或水印。
```

**编辑技巧：** 第一轮先生成结构。下一轮只修正错误文字，并明确要求保持所有图片、颜色、间距和版式位置不变。

## 4. 可信的 80 年代复古肖像

`摄影` `肖像` `参考图` `Flare`

<img src="images/official/80s-headshot.webp" alt="80 年代风格肖像" width="100%">

```text
使用参考照片中的人物，生成一张可信的 1980 年代末商场影楼肖像。
保持人物可识别的脸部、肤色、头发质感、年龄和五官比例。

服装：青绿、海军蓝和灰粉色拼接的复古运动夹克，搭配一条小金链。
场景：柔和霓虹灯管、银色录音机、影楼渐变背景布。
相机：消费级彩色胶片、柔光箱、轻微光晕、真实颗粒、略暖肤色、年代准确。

不要美化或重塑脸部，不要现代物体、文字、Logo 或水印。
```

## 5. 只换服装，保持人物

`图片编辑` `身份保持` `Sunburst`

| 输入图 | 编辑结果 |
| :---: | :---: |
| <img src="images/official/portrait-before.webp" alt="原始儿童肖像"> | <img src="images/official/portrait-after.webp" alt="换装后的儿童肖像"> |

```text
只把孩子的服装替换成象牙白色礼服，使用黑色翻领和黑色领结。
严格保持孩子的脸部、表情、头发、身体姿势、双手位置、相机角度、纸质照片质感、
蓝色背景、光线、阴影和构图不变。服装需要自然贴合原有姿势。
不要修饰脸部、改变姿势、增加配饰或重新设计背景。
```

## 6. 改变动作，保持房间

`图片编辑` `场景一致性` `Sunburst`

| 输入图 | 编辑结果 |
| :---: | :---: |
| <img src="images/official/making-bed-before.webp" alt="没有整理的床"> | <img src="images/official/making-bed-after.webp" alt="同一个房间中整理好的床"> |

```text
只把床铺整理整齐：抚平现有的白色床品，把现有枕头整齐摆放在床头。
保持床架、房间、灯具、床头柜、墙面、所有物体、相机角度、裁切、曝光、光线和
阴影不变。不要清洁、移动、增加、删除或重新设计房间里的其他任何东西。
```

## 7. 把宠物变成特技演员

`图片编辑` `参考图保真` `角色` `Flare`

| 输入图 | 编辑结果 |
| :---: | :---: |
| <img src="images/official/dog-before.webp" alt="露台上的狗"> | <img src="images/official/dog-after.webp" alt="穿着特技服装的同一只狗"> |

```text
给这只狗穿上一套合身的白色 1970 年代特技演员服装和头盔，加入红蓝条纹和
小型星星图案，胸口只有一块写着 "STUNTMAN" 的布章。
严格保持同一只狗、脸部、毛发、身体比例、站姿、牵引绳、露台、椅子、阳光、
阴影、相机位置和构图。服装必须自然贴合狗的身体结构。不要改变其他任何内容。
```

## 三个真正有用的技巧

1. **编辑要写契约：** 先说允许改什么，再逐项列出必须保持什么。
2. **文字要当数据：** 用引号给出准确文案，说明出现次数和层级，禁止额外文字。
3. **多轮一次改一件事：** 每一轮都重复不变量，不要同时修改版式、文案和光线。

## 更多视觉方向

<p align="center">
  <img src="images/official/sci-fi-surrealism.webp" width="32%" alt="科幻超现实主义">
  <img src="images/official/impressionist-cityscape.webp" width="32%" alt="印象派城市景观">
  <img src="images/official/earth-mosaic.webp" width="32%" alt="地球马赛克">
</p>
<p align="center">
  <img src="images/official/cyberpunk-city.webp" width="32%" alt="赛博朋克城市">
  <img src="images/official/80s-headshot.webp" width="32%" alt="80 年代肖像">
  <img src="images/official/travel-infographic.webp" width="32%" alt="旅行信息图">
</p>

## X 上刚发布的实验

### 同一个 Prompt：GPT Image 2 与 2.5

`模型对比` `复杂场景` `材质`

<img src="images/community/gpt-image-2-vs-2-5-forest.jpg" alt="GPT Image 2 与 GPT Image 2.5 森林对比" width="100%">

这次生成中，GPT Image 2.5 的细节和材质更丰富，速度接近两倍，但复杂场景中的视觉噪点也更多。[原帖](https://x.com/TimJayas/status/2097442532980634096)，作者 @TimJayas。

### 用参考图控制写实 UGC 摄影

`摄影` `商品` `参考图` `工作流`

<img src="images/community/photorealistic-ugc-workflow.jpg" alt="使用参考图生成的写实 UGC 案例" width="100%">

[@Mho_23 分享的流程](https://x.com/Mho_23/status/2097483045221917131)：

1. 找一张拥有目标色彩和创意方向的参考照片；
2. 让推理模型把它的光线、配色、对比度、颗粒、镜头和构图整理成详细风格说明；
3. 把风格说明、商品图和准确的摆放要求一起交给 GPT Image 2.5；
4. 保存最满意的人物图片，后续每次生成都附上它，以保持同一张脸。

这套方法的关键是分离职责：风格参考控制视觉处理，人物参考保持角色一致，商品图保证产品准确。

### 失败案例也应该留下

`图片编辑` `失败分析` `图解`

<img src="images/community/editing-failure-case.jpg" alt="标准答案与 GPT Image 2、GPT Image 2.5 图解编辑结果对比" width="100%">

GPT Image 2.5 的结果更好，但仍然添加了标准答案中不存在的线条。图解、UI 和信息图必须逐线检查。[原帖](https://x.com/pigeon__s/status/2097412201778966629)，作者 @pigeon__s。

### 四个直接复制的原子编辑 Prompt

根据 [@cgtwts 分享的 12 个编辑 Prompt](https://x.com/cgtwts/status/2097456916335383025)改写：

```text
只修一个物体
保持照片中所有内容不变，只把破损的杯子替换成一个完好的杯子。
匹配原来的尺寸、角度、光线和阴影。

只改变天气
把白天的街道照片变成雨夜。保持每栋建筑、车辆和人物的位置完全不变，
只改变天气和光线。

清理商品图
移除背景，把商品放在纯白背景上。不要改变它的形状、颜色、材质、标签和比例。

扩展画面
把图片改为 16:9 横版。不要裁切或缩放主体，只在左右两侧自然扩展背景。
```

## 2.5 更新了什么

- 更好的参考图保真度、更自然的光线和材质
- 更准确地只修改指定元素
- 多轮编辑后的画质和一致性更稳定
- 更好地遵循复杂版式和风格要求
- 与 Images 2.0 相比，生成延迟最多降低 50%

日常生成和速度优先使用 `gpt-image-2.5-flare`；精确编辑优先使用 `gpt-image-2.5-sunburst`。详见 [官方介绍](https://openai.com/index/introducing-chatgpt-images-2-5/) 和 [API 指南](https://developers.openai.com/api/docs/guides/image-generation)。

---

官方展示图片：OpenAI。X 案例：链接中的原作者。本仓库编写的 Prompt 与文字：MIT。
