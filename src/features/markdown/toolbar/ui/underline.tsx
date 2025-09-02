"use client";

import { UnderlineIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useUnderline } from "@/features/markdown/toolbar";

export function Underline() {
  const underline = useUnderline();

  return (
    <MarkdownToolbarItem
      name="underline"
      icon={UnderlineIcon}
      isActive={underline.isActive}
      onClick={underline.toggle}
    />
  );
}
