---
title: "Page Number"
description: "当前页码标记。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/page-number
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/page-number/page-number.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

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

| 属性       | 类型                            | 默认值                                       |
| ---------- | ------------------------------- | -------------------------------------------- |
| `format`   | `string`                        | 'Page &#123;page&#125; of &#123;total&#125;' |
| `align`    | `'left' \| 'center' \| 'right'` | 'center'                                     |
| `size`     | `'xs' \| 'sm' \| 'md'`          | 'sm'                                         |
| `fixed`    | `boolean`                       | false                                        |
| `muted`    | `boolean`                       | true                                         |
| `children` | `never`                         | -                                            |
