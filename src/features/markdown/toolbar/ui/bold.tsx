"use client";

import { BoldIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown,
  useMarkdownMark
} from "@/entities/markdown";

export function Bold() {
  const markdown = useMarkdown();
  const markdownMark = useMarkdownMark({
    mark: "strong"
  });

  return (
    <MarkdownToolbarItem
      name="bold"
      icon={BoldIcon}
      isActive={markdown.isMarkActive(
        "strong"
      )}
      onClick={markdownMark.toggle}
    />
  );
}
