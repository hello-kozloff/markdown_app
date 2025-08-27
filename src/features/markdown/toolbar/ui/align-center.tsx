"use client";

import { AlignCenterIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function AlignCenter() {
  const markdown = useMarkdown();

  return (
    <MarkdownToolbarItem
      name="align-center"
      icon={AlignCenterIcon}
      onClick={() =>
        markdown.setTextAlign("center")
      }
    />
  );
}
