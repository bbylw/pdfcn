---
title: "Key Value"
description: "键值对定义列表。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/takumi/key-value
```

### 手动

**安装以下依赖：**

```bash
npm install takumi-pdf @takumi-rs/helpers
```

**将以下代码复制粘贴到你的项目中。**

- `components/pdf/key-value/key-value.tsx`

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
import { KeyValue } from "@/components/pdf/key-value";
```

```tsx
<KeyValue items={[{ key: "Name", value: "Ada" }]} />
```

## API 参考

### KeyValue

| 属性               | 类型                         | 默认值         |
| ------------------ | ---------------------------- | -------------- |
| `items`            | `KeyValueEntry[]`            | -              |
| `direction`        | `'horizontal' \| 'vertical'` | `'horizontal'` |
| `divided`          | `boolean`                    | `false`        |
| `size`             | `'sm' \| 'md' \| 'lg'`       | `'md'`         |
| `labelFlex`        | `number`                     | `1`            |
| `labelColor`       | `string`                     | -              |
| `valueColor`       | `string`                     | -              |
| `boldValue`        | `boolean`                    | `false`        |
| `noWrap`           | `boolean`                    | `false`        |
| `dividerColor`     | `string`                     | -              |
| `dividerThickness` | `number`                     | -              |
| `dividerMargin`    | `number`                     | -              |
