"use client";

import { CodeXmlIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown,
  useMarkdownMark
} from "@/entities/markdown";

export function CodeInline() {
  const markdown = useMarkdown();
  const markdownMark = useMarkdownMark({
    mark: "code"
  });

  return (
    <MarkdownToolbarItem
      name="code-inline"
      icon={CodeXmlIcon}
      isActive={markdown.isMarkActive(
        "code"
      )}
      onClick={markdownMark.toggle}
    />
  );
}
