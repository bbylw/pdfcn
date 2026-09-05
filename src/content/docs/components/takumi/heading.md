---
title: "Heading"
description: "具有排版层级的文档标题。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/heading
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/heading/heading.tsx`

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
import { Heading } from "@/components/pdf/heading";
```

```tsx
<Heading level={1}>Heading</Heading>
```

## API 参考

### Heading

| 属性           | 类型                                                    | 默认值     |
| -------------- | ------------------------------------------------------- | ---------- |
| `level`        | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                            | `1`        |
| `align`        | `'left' \| 'center' \| 'right'`                         | `'left'`   |
| `color`        | `string`                                                | -          |
| `transform`    | `'uppercase' \| 'lowercase' \| 'capitalize'`            | -          |
| `weight`       | `'normal' \| 'medium' \| 'semibold' \| 'bold'`          | `'bold'`   |
| `tracking`     | `'tighter' \| 'tight' \| 'normal' \| 'wide' \| 'wider'` | `'normal'` |
| `noMargin`     | `boolean`                                               | `false`    |
| `keepWithNext` | `boolean`                                               | -          |
