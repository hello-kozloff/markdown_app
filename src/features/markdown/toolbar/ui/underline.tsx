"use client";

import { UnderlineIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function Underline() {
  const markdown = useMarkdown();
  const markType = markdown.getMarkType(
    "underline"
  );

  return (
    <MarkdownToolbarItem
      name="underline"
      icon={UnderlineIcon}
      isActive={markdown.isMarkActive(
        markType
      )}
      onClick={() =>
        markdown.toggleMark(markType)
      }
    />
  );
}
