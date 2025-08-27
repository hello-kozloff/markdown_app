"use client";

import { UnderlineIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown,
  useMarkdownMark
} from "@/entities/markdown";

export function Underline() {
  const markdown = useMarkdown();
  const markdownMark = useMarkdownMark({
    mark: "underline"
  });

  return (
    <MarkdownToolbarItem
      name="underline"
      icon={UnderlineIcon}
      isActive={markdown.isMarkActive(
        "underline"
      )}
      onClick={markdownMark.toggle}
    />
  );
}
