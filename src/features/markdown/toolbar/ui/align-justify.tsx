"use client";

import { AlignJustifyIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function AlignJustify() {
  const markdown = useMarkdown();

  return (
    <MarkdownToolbarItem
      name="align-justify"
      icon={AlignJustifyIcon}
      onClick={() =>
        markdown.setTextAlign("justify")
      }
    />
  );
}
