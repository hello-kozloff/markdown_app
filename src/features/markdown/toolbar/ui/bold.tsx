"use client";

import { BoldIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function Bold() {
  const markdown = useMarkdown();
  const markType =
    markdown.getMarkType("strong");

  return (
    <MarkdownToolbarItem
      name="bold"
      icon={BoldIcon}
      isActive={markdown.isMarkActive(
        markType
      )}
      onClick={() =>
        markdown.toggleMark(markType)
      }
    />
  );
}
