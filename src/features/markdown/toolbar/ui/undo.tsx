"use client";

import { Undo2Icon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function Undo() {
  const markdown = useMarkdown();

  return (
    <MarkdownToolbarItem
      name="undo"
      icon={Undo2Icon}
      onClick={markdown.undo}
      isDisabled={markdown.isCanUndo}
    />
  );
}
