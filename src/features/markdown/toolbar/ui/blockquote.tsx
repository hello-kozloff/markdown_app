"use client";

import { TextQuoteIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function Blockquote() {
  const markdown = useMarkdown();

  return (
    <MarkdownToolbarItem
      name="blockquote"
      icon={TextQuoteIcon}
      isActive={markdown.isNodeActive(
        "blockquote"
      )}
      onClick={() =>
        markdown.setBlockType(
          markdown.getNodeType(
            "blockquote"
          )
        )
      }
    />
  );
}
