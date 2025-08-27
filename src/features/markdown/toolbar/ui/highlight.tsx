"use client";

import { HighlighterIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdownMark
} from "@/entities/markdown";

export function Highlight() {
  const markdownMark = useMarkdownMark({
    mark: "highlight"
  });

  return (
    <MarkdownToolbarItem
      name="highlight"
      icon={HighlighterIcon}
      isActive={markdownMark.isActive}
      onClick={markdownMark.toggle}
    />
  );
}
