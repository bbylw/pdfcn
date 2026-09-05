---
title: 注册表
description: 了解如何配合 shadcn CLI 使用 pdfcn 注册表。
---

**pdfcn** 注册表以 [shadcn 注册表格式](https://ui.shadcn.com/docs/registry) 提供 Takumi 和 Forme 的组件、区块和主题。只需在 `components.json` 中注册一次命名空间，之后即可通过 CLI 按名称拉取条目。

## 配置

为本站添加一个 **registries** 条目。所有 `components.json` 字段和行为请参阅 [shadcn 注册表文档](https://ui.shadcn.com/docs/registry)。

```json
{
  "registries": {
    "@pdfcn": "https://pdfcn.dev/r/{name}.json"
  }
}
```

你可以把 `@pdfcn` 替换为其他命名空间，只需与传给 `shadcn add` 的内容保持一致。

## 用法

条目按基础引擎划分命名空间：Takumi 用 `takumi/`，Forme 用 `forme/`。

注册表文件遵循以下安装位置：

- 组件安装到 `components/ui/`。
- 区块安装到配置的区块目录。

组件会声明自己的依赖，因此安装组件无需额外配置。

### Takumi

安装组件：

```bash
npx shadcn@latest add @pdfcn/takumi/text
```

安装区块：

```bash
npx shadcn@latest add @pdfcn/takumi/invoice-minimal
```

不使用注册表别名时，可使用完整 URL（与每个文档页中的一致）：

```bash
npx shadcn@latest add https://pdfcn.dev/r/takumi/text.json
```

### Forme

安装组件：

```bash
npx shadcn@latest add @pdfcn/forme/text
```

安装区块：

```bash
npx shadcn@latest add @pdfcn/forme/invoice-minimal
```

不使用注册表别名时，可使用完整 URL（与每个文档页中的一致）：

```bash
npx shadcn@latest add https://pdfcn.dev/r/forme/text.json
```
