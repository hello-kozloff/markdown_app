"use client";

import { TextQuoteIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown,
  useMarkdownNode
} from "@/entities/markdown";

export function Blockquote() {
  const markdown = useMarkdown();
  const markdownNode =
    useMarkdownNode();

  return (
    <MarkdownToolbarItem
      name="blockquote"
      icon={TextQuoteIcon}
      isActive={markdown.isNodeActive(
        "blockquote"
      )}
      onClick={() =>
        markdown.setBlockType(
          "blockquote"
        )
      }
    />
  );
}
