"use client";

import { HighlighterIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useHighlight } from "@/features/markdown/toolbar";

export function Highlight() {
  const highlight = useHighlight();

  return (
    <MarkdownToolbarItem
      name="highlight"
      icon={HighlighterIcon}
      isActive={highlight.isActive}
      onClick={highlight.toggle}
    />
  );
}
