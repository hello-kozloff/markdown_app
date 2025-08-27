"use client";

import { TextQuoteIcon } from "lucide-react";
import { MarkdownToolbarItem, useMarkdown } from "@/entities/markdown";

export function Blockquote() {
  const markdown = useMarkdown();
  const nodeType = markdown.getNodeType(
    "blockquote"
  );

  const handleClick = () => {
    if (
      markdown.isNodeActive(
        "blockquote"
      )
    ) {
      return markdown.lift();
    }

    return markdown.wrapIn(nodeType);
  };

  return (
    <MarkdownToolbarItem
      name="blockquote"
      icon={TextQuoteIcon}
      isActive={markdown.isNodeActive(
        "blockquote"
      )}
      onClick={handleClick}
    />
  );
}
