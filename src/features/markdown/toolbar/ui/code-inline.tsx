"use client";

import { CodeXmlIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useCodeInline } from "@/features/markdown/toolbar";

export function CodeInline() {
  const codeInline = useCodeInline();

  return (
    <MarkdownToolbarItem
      name="code-inline"
      icon={CodeXmlIcon}
      isActive={codeInline.isActive}
      onClick={codeInline.toggle}
    />
  );
}
