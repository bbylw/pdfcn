---
title: "List"
description: "有序列表和无序列表。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/forme/list
```

### 手动

**安装以下依赖：**

```bash
npm install @formepdf/react @formepdf/core
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/list/list.tsx`

- `components/pdf/theme-provider.tsx`

- `lib/resolve-color.ts`

- `lib/pdf-themes/professional.ts`

- `lib/pdf-themes/primitives.ts`

- `types/pdf-themes.ts`

- `types/pdf-components.ts`

**更新导入路径以匹配你的项目配置。**

## 用法

```tsx
import { PdfList } from "@/components/pdf/list";
```

```tsx
<PdfList items={[{ text: "Alpha" }, { text: "Beta" }]} />
```

### 变体

```tsx
<PdfList variant="numbered" items={items} />
<PdfList variant="checklist" items={checklistItems} gap="md" />
```

## API 参考

### PdfList

| 属性      | 类型                                                                                | 默认值     |
| --------- | ----------------------------------------------------------------------------------- | ---------- |
| `items`   | `ListItem[]`                                                                        | -          |
| `variant` | `'bullet' \| 'numbered' \| 'checklist' \| 'icon' \| 'multi-level' \| 'descriptive'` | `'bullet'` |
| `gap`     | `'xs' \| 'sm' \| 'md'`                                                              | `'sm'`     |
| `noWrap`  | `boolean`                                                                           | `false`    |
| `style`   | `Style`                                                                             | -          |
