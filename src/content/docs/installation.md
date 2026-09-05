---
title: 安装
description: 从注册表安装 PDF 组件、区块和主题。
---

## 前置要求

一个可以运行 [Takumi](https://takumi.kane.tw/docs/pdf) 或 [Forme](https://docs.formepdf.com) 的 React 项目。

## 安装

运行以下命令添加一个 Takumi 组件：

```bash
npx shadcn@latest add @pdfcn/takumi/text
```

Forme 组件使用 `forme/` 命名空间：

```bash
npx shadcn@latest add @pdfcn/forme/text
```

注册表会安装所选组件所需的匹配渲染器依赖以及共享主题工具。

## 用法

导入安装好的组件，并在渲染器的文档原语中使用它：

```tsx
import { Document, Page } from "@/components/pdf/pdf-primitives";
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { Text } from "@/components/pdf/text";

export function Invoice() {
  return (
    <Document>
      <Page size="A4">
        <PdfcnThemeProvider>
          <Text variant="xl">Invoice</Text>
        </PdfcnThemeProvider>
      </Page>
    </Document>
  );
}
```

对于 Forme，请使用来自 `@formepdf/react` 的 `Document` 和 `Page`；已安装的 pdfcn 组件 API 保持不变。

## 安装区块

区块是由注册表组件组合而成的完整文档模板：

```bash
npx shadcn@latest add @pdfcn/takumi/invoice-minimal
```

对应的 Forme 文档请使用 `forme/` 命名空间：

```bash
npx shadcn@latest add @pdfcn/forme/invoice-minimal
```

## 安装主题

pdfcn 附带可与 `PdfcnThemeProvider` 集成的主题预设：

```bash
npx shadcn@latest add @pdfcn/takumi/theme-minimal
```

Forme 版本：

```bash
npx shadcn@latest add @pdfcn/theme-minimal
```
