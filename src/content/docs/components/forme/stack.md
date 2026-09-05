---
title: "Stack"
description: "带有间距的垂直堆叠容器。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/stack
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/stack/stack.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { Stack } from "@/components/pdf/stack";
import { Text } from "@/components/pdf/text";
```

```tsx
<Stack gap="md">
  <Text>One</Text>
  <Text>Two</Text>
</Stack>
```

## API 参考

### Stack

| 属性        | 类型                                                    | 默认值     |
| ----------- | ------------------------------------------------------- | ---------- |
| `gap`       | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'`                | 'md'       |
| `direction` | `'vertical' \| 'horizontal'`                            | 'vertical' |
| `align`     | `'start' \| 'center' \| 'end' \| 'stretch'`             | 'start'    |
| `justify`   | `'start' \| 'center' \| 'end' \| 'between' \| 'around'` | 'start'    |
| `wrap`      | `boolean`                                               | false      |
| `noWrap`    | `boolean`                                               | false      |
