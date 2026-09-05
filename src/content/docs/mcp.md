---
title: MCP
description: 了解如何将 shadcn MCP（Model Context Protocol）服务器与 pdfcn 配合使用。
---

[MCP](https://modelcontextprotocol.io/) 是一个开放协议，用于标准化应用程序向 LLM 提供上下文的方式。shadcn CLI 可以注册一个 MCP 服务器，让编辑器能够发现注册表组件，包括你通过同一 CLI 从 **pdfcn** 安装的条目。

## 配置 MCP

运行：

```bash
npx shadcn@latest mcp init
```

在提示时选择你的 MCP 客户端，然后在该客户端中启用 MCP 服务器即可完成配置。

## 用法

启用 MCP 后，你可以让 IDE 使用 **Takumi** 和 **Forme** 模式以及 pdfcn 注册表组件。示例提示：

- 用 **Table**、**Heading**、**Text** 和 **KeyValue** 构建一个发票布局。
- 在 PDF 文档中添加 **QRCode** 和 **Signature**。
- 用 **Graph**、**DataTable** 和 **PageHeader** 创建一个报告。
- 用 **Section**、**Stack**、**Divider** 和 **KeepTogether** 排版一个 PDF。
- 用 **PageBreak**、**PageNumber** 和 **PageFooter** 实现多页流程。

使用 `npx shadcn@latest add` 加上每个文档页中的 JSON URL 从本注册表安装组件。组件默认值开箱即用。
