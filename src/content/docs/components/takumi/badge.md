---
title: "Badge"
description: "用于标签和标记的紧凑状态徽章。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/badge
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/badge/badge.tsx`

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
import { Badge } from "@/components/pdf/badge";
```

```tsx
<Badge>Badge</Badge>
```

## API 参考

### Badge

| 属性         | 类型                                                                                       | 默认值      |
| ------------ | ------------------------------------------------------------------------------------------ | ----------- |
| `label`      | `string`                                                                                   | -           |
| `children`   | `string`                                                                                   | -           |
| `variant`    | `'default' \| 'primary' \| 'success' \| 'warning' \| 'destructive' \| 'info' \| 'outline'` | `'default'` |
| `size`       | `'sm' \| 'md' \| 'lg'`                                                                     | `'md'`      |
| `background` | `string`                                                                                   | -           |
| `color`      | `string`                                                                                   | -           |
