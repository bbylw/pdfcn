---
title: "Graph"
description: "使用 SVG 绘制的柱状图、折线图和面积图。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/graph
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/graph/graph.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-primitives.tsx`

- `lib/pdf-svg.tsx`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { PdfGraph } from "@/components/pdf/graph";
```

```tsx
<PdfGraph variant="bar" data={[{ label: "Q1", value: 30 }]} />
```

### 变体

```tsx
<PdfGraph variant="line" data={series} showDots smooth />
<PdfGraph variant="donut" data={totals} centerLabel="$48k" />
```

## API 参考

### PdfGraph

| 属性          | 类型                                                                | 默认值     |
| ------------- | ------------------------------------------------------------------- | ---------- |
| `variant`     | `'bar' \| 'horizontal-bar' \| 'line' \| 'area' \| 'pie' \| 'donut'` | `'bar'`    |
| `data`        | `GraphDataPoint[] \| GraphSeries[]`                                 | -          |
| `title`       | `string`                                                            | -          |
| `subtitle`    | `string`                                                            | -          |
| `xLabel`      | `string`                                                            | -          |
| `yLabel`      | `string`                                                            | -          |
| `width`       | `number`                                                            | `420`      |
| `height`      | `number`                                                            | `260`      |
| `fullWidth`   | `boolean`                                                           | `false`    |
| `colors`      | `string[]`                                                          | theme      |
| `showValues`  | `boolean`                                                           | `false`    |
| `showGrid`    | `boolean`                                                           | `true`     |
| `legend`      | `'bottom' \| 'right' \| 'none'`                                     | `'bottom'` |
| `centerLabel` | `string`                                                            | -          |
| `showDots`    | `boolean`                                                           | `true`     |
| `smooth`      | `boolean`                                                           | `false`    |
| `yTicks`      | `number`                                                            | `5`        |
| `noWrap`      | `boolean`                                                           | `true`     |
| `style`       | `Style`                                                             | -          |
