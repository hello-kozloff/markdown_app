"use client";

import { AlignLeftIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function AlignLeft() {
  return (
    <MarkdownToolbarItem
      name="align-left"
      icon={AlignLeftIcon}
    />
  );
}
