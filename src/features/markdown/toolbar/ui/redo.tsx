"use client";

import { Redo2Icon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function Redo() {
  const markdown = useMarkdown();

  return (
    <MarkdownToolbarItem
      name="redo"
      icon={Redo2Icon}
      onClick={markdown.redo}
      isDisabled={markdown.isCanRedo}
    />
  );
}
