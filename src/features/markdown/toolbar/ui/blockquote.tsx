"use client";

import { TextQuoteIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useBlockquote } from "@/features/markdown/toolbar";

export function Blockquote() {
  const blockquote = useBlockquote();

  return (
    <MarkdownToolbarItem
      name="blockquote"
      icon={TextQuoteIcon}
      isActive={blockquote.isActive}
      onClick={blockquote.toggle}
    />
  );
}
