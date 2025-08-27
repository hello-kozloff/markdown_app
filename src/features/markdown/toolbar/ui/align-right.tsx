"use client";

import { AlignRightIcon } from "lucide-react";
import { MarkdownToolbarItem, useMarkdown } from "@/entities/markdown";

export function AlignRight() {
  const markdown = useMarkdown();

  return (
    <MarkdownToolbarItem
      name="align-right"
      icon={AlignRightIcon}
      onClick={() =>
        markdown.setTextAlign("right")
      }
    />
  );
}
