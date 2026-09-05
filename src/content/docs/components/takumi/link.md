---
title: "Link"
description: "为 PDF 文档样式化的可点击链接。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/link
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/link/link.tsx`

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
import { Link } from "@/components/pdf/link";
```

```tsx
<Link href="https://example.com">Example</Link>
```

## API 参考

### Link

| 属性        | 类型                                | 默认值      |
| ----------- | ----------------------------------- | ----------- |
| `href`      | `string`                            | -           |
| `align`     | `'left' \| 'center' \| 'right'`     | `'left'`    |
| `color`     | `string`                            | -           |
| `variant`   | `'default' \| 'muted' \| 'primary'` | `'default'` |
| `underline` | `'always' \| 'none'`                | `'always'`  |
