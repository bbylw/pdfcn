---
title: "PDF Image"
description: "支持多种适配选项的嵌入图片。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/pdf-image
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/pdf-image/pdf-image.tsx`

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
import { PdfImage } from "@/components/pdf/pdf-image";
```

```tsx
<PdfImage src="/logo.png" width={120} />
```

## API 参考

### PdfImage

| 属性           | 类型                                                                                                    | 默认值      |
| -------------- | ------------------------------------------------------------------------------------------------------- | ----------- |
| `src`          | `string \| &#123; uri: string; method?: string; headers?: Record<string, string>; body?: string &#125;` | -           |
| `variant`      | `'default' \| 'full-width' \| 'thumbnail' \| 'avatar' \| 'cover' \| 'bordered' \| 'rounded'`            | `'default'` |
| `width`        | `number \| string`                                                                                      | -           |
| `height`       | `number \| string`                                                                                      | -           |
| `fit`          | `'cover' \| 'contain' \| 'fill' \| 'none'`                                                              | -           |
| `position`     | `string`                                                                                                | `'50% 50%'` |
| `caption`      | `string`                                                                                                | -           |
| `aspectRatio`  | `number`                                                                                                | -           |
| `borderRadius` | `number`                                                                                                | -           |
| `noWrap`       | `boolean`                                                                                               | `true`      |
| `style`        | `Style`                                                                                                 | -           |
