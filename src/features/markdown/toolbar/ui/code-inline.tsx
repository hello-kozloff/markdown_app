"use client";

import { CodeXmlIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function CodeInline() {
  const markdown = useMarkdown();
  const markType =
    markdown.getMarkType("code");

  return (
    <MarkdownToolbarItem
      name="code-inline"
      icon={CodeXmlIcon}
      isActive={markdown.isMarkActive(
        markType
      )}
      onClick={() =>
        markdown.toggleMark(markType)
      }
    />
  );
}
