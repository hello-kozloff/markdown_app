"use client";

import { AlignLeftIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function AlignLeft() {
  const markdown = useMarkdown();

  return (
    <MarkdownToolbarItem
      name="align-left"
      icon={AlignLeftIcon}
      onClick={() =>
        markdown.setTextAlign("left")
      }
    />
  );
}
