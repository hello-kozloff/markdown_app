"use client";

import { ImageIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Image() {
  return (
    <MarkdownToolbarItem
      name="image"
      icon={ImageIcon}
    />
  );
}
