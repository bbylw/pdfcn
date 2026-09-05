---
title: "Blueprint"
description: "深石板底色搭配青色点缀，等宽字体标题，充满技术感。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-blueprint
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/blueprint.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { blueprintTheme } from "@/lib/pdf-themes/blueprint";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={blueprintTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
