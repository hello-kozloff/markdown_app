"use client";

import { ItalicIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useItalic } from "@/features/markdown/toolbar";

export function Italic() {
  const italic = useItalic();

  return (
    <MarkdownToolbarItem
      name="italic"
      icon={ItalicIcon}
      isActive={italic.isActive}
      onClick={italic.toggle}
    />
  );
}
