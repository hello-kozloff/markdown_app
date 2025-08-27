"use client";

import { StrikethroughIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function Strike() {
  const markdown = useMarkdown();
  const markType =
    markdown.getMarkType("strike");

  return (
    <MarkdownToolbarItem
      name="strike"
      icon={StrikethroughIcon}
      isActive={markdown.isMarkActive(
        markType
      )}
      onClick={() =>
        markdown.toggleMark(markType)
      }
    />
  );
}
