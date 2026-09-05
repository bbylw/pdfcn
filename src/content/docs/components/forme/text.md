---
title: "Text"
description: "带有排版变体的正文文本。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/text
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/text/text.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { Text } from "@/components/pdf/text";
```

```tsx
<Text>Hello from pdfcn</Text>
```

## API 参考

### Text

| 属性         | 类型                                                       | 默认值     |
| ------------ | ---------------------------------------------------------- | ---------- |
| `variant`    | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | `'base'`   |
| `align`      | `'left' \| 'center' \| 'right' \| 'justify'`               | `'left'`   |
| `color`      | `string`                                                   | -          |
| `weight`     | `'normal' \| 'medium' \| 'semibold' \| 'bold'`             | `'normal'` |
| `italic`     | `boolean`                                                  | `false`    |
| `decoration` | `'underline' \| 'line-through' \| 'none'`                  | `'none'`   |
| `transform`  | `'uppercase' \| 'lowercase' \| 'capitalize'`               | -          |
| `noMargin`   | `boolean`                                                  | `false`    |
