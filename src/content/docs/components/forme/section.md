---
title: "Section"
description: "带可选标题的区域容器。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/section
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/section/section.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { Section } from "@/components/pdf/section";
import { Text } from "@/components/pdf/text";
```

```tsx
<Section>
  <Text>Section body</Text>
</Section>
```

## API 参考

### Section

| 属性          | 类型                                              | 默认值    |
| ------------- | ------------------------------------------------- | --------- |
| `spacing`     | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'`          | 'md'      |
| `padding`     | `'none' \| 'sm' \| 'md' \| 'lg'`                  | -         |
| `background`  | `string`                                          | -         |
| `border`      | `boolean`                                         | false     |
| `variant`     | `'default' \| 'callout' \| 'highlight' \| 'card'` | 'default' |
| `accentColor` | `string`                                          | -         |
| `noWrap`      | `boolean`                                         | false     |
