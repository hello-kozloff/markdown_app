"use client";

import { HighlighterIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function Highlight() {
  const markdown = useMarkdown();
  const markType = markdown.getMarkType(
    "highlight"
  );

  return (
    <MarkdownToolbarItem
      name="highlight"
      icon={HighlighterIcon}
      isActive={markdown.isMarkActive(
        markType
      )}
      onClick={() =>
        markdown.toggleMark(markType)
      }
    />
  );
}
