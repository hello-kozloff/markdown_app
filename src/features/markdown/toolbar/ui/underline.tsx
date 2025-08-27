"use client";

import { UnderlineIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdownMark
} from "@/entities/markdown";

export function Underline() {
  const markdownMark = useMarkdownMark({
    mark: "underline"
  });

  return (
    <MarkdownToolbarItem
      name="underline"
      icon={UnderlineIcon}
      isActive={markdownMark.isActive}
      onClick={markdownMark.toggle}
    />
  );
}
