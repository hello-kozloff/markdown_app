"use client";

import { ItalicIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown,
  useMarkdownMark
} from "@/entities/markdown";

export function Italic() {
  const markdown = useMarkdown();
  const markdownMark = useMarkdownMark({
    mark: "em"
  });

  return (
    <MarkdownToolbarItem
      name="italic"
      icon={ItalicIcon}
      isActive={markdown.isMarkActive(
        "em"
      )}
      onClick={markdownMark.toggle}
    />
  );
}
