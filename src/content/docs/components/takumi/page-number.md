---
title: "Page Number"
description: "当前页码标记。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/page-number
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/page-number/page-number.tsx`

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
import { PdfPageNumber } from "@/components/pdf/page-number";
```

```tsx
<PdfPageNumber />
```

## API 参考

### PdfPageNumber

| 属性       | 类型                            | 默认值                     |
| ---------- | ------------------------------- | -------------------------- |
| `format`   | `string`                        | `'Page {page} of {total}'` |
| `align`    | `'left' \| 'center' \| 'right'` | `'center'`                 |
| `size`     | `'xs' \| 'sm' \| 'md'`          | `'sm'`                     |
| `fixed`    | `boolean`                       | `false`                    |
| `muted`    | `boolean`                       | `true`                     |
| `children` | `never`                         | -                          |
