"use client";

import { StrikethroughIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown,
  useMarkdownMark
} from "@/entities/markdown";

export function Strike() {
  const markdown = useMarkdown();
  const markdownMark = useMarkdownMark({
    mark: "strike"
  });

  return (
    <MarkdownToolbarItem
      name="strike"
      icon={StrikethroughIcon}
      isActive={markdown.isMarkActive(
        "strike"
      )}
      onClick={markdownMark.toggle}
    />
  );
}
