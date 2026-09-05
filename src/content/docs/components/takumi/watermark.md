---
title: "Watermark"
description: "对角或居中的水印覆盖层。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/watermark
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/watermark/watermark.tsx`

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
import { PdfWatermark } from "@/components/pdf/watermark";
import { Text } from "@/components/pdf/text";
```

```tsx
<PdfWatermark text="DRAFT" />
```

## API 参考

### PdfWatermark

| 属性       | 类型                                                                       | 默认值  |
| ---------- | -------------------------------------------------------------------------- | ------- |
| `text`     | `string`                                                                   | -       |
| `opacity`  | `number`                                                                   | -       |
| `fontSize` | `number`                                                                   | -       |
| `color`    | `string`                                                                   | -       |
| `angle`    | `number`                                                                   | -       |
| `position` | `'center' \| 'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right'` | -       |
| `fixed`    | `boolean`                                                                  | `true`  |
| `children` | `never`                                                                    | -       |
