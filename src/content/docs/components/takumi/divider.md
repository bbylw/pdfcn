---
title: "Divider"
description: "用于分隔各区块的水平分隔线。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/divider
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/divider/divider.tsx`

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
import { Divider } from "@/components/pdf/divider";
```

```tsx
<Divider />
```

## API 参考

### Divider

| 属性        | 类型                              | 默认值    |
| ----------- | --------------------------------- | --------- |
| `spacing`   | `'none' \| 'sm' \| 'md' \| 'lg'`  | `'md'`    |
| `variant`   | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` |
| `color`     | `string`                          | -         |
| `thickness` | `'thin' \| 'medium' \| 'thick'`   | `'thin'`  |
| `label`     | `string`                          | -         |
| `width`     | `string \| number`                | -         |
