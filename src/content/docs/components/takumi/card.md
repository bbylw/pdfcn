---
title: "Card"
description: "带有标题和正文、带边框的内容卡片。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/card
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/card/card.tsx`

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
import { PdfCard } from "@/components/pdf/card";
```

```tsx
<PdfCard title="Card">Card body</PdfCard>
```

## API 参考

### PdfCard

| 属性       | 类型                                 | 默认值      |
| ---------- | ------------------------------------ | ----------- |
| `title`    | `string`                             | -           |
| `children` | `ReactNode`                          | -           |
| `variant`  | `'default' \| 'bordered' \| 'muted'` | `'default'` |
| `padding`  | `'sm' \| 'md' \| 'lg'`               | `'md'`      |
| `wrap`     | `boolean`                            | `false`     |
