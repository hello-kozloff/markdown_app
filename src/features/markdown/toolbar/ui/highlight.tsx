"use client";

import { HighlighterIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown,
  useMarkdownMark
} from "@/entities/markdown";

export function Highlight() {
  const markdown = useMarkdown();
  const markdownMark = useMarkdownMark({
    mark: "highlight"
  });

  return (
    <MarkdownToolbarItem
      name="highlight"
      icon={HighlighterIcon}
      isActive={markdown.isMarkActive(
        "highlight"
      )}
      onClick={markdownMark.toggle}
    />
  );
}
