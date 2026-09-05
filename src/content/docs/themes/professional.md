---
title: "Professional"
description: "衬线字体标题，精致的锌灰与石板色搭配，呈现正式公文质感。"
---

## 安装

### 命令

```bash
npx shadcn@latest add @pdfcn/theme-professional
```

### 手动

**将以下代码复制并粘贴到你的项目中。**

- `lib/themes/professional.ts`

**根据你的项目配置更新导入路径。**

## 用法

```tsx
import { PdfcnThemeProvider } from "@/components/pdf/theme-provider";
import { professionalTheme } from "@/lib/pdf-themes/professional";

export function Invoice() {
  return (
    <PdfcnThemeProvider theme={professionalTheme}>
      {/* Your PDF content */}
    </PdfcnThemeProvider>
  );
}
```
