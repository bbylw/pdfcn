---
title: "Vivid"
description: "深紫色调，Nunito 圆角无衬线字体，活泼又不失专业。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-vivid
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/vivid.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { vividTheme } from "@/lib/pdf-themes/vivid";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={vividTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
