"use client";

import { BoldIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useBold } from "@/features/markdown/toolbar";

export function Bold() {
  const bold = useBold();

  return (
    <MarkdownToolbarItem
      name="bold"
      icon={BoldIcon}
      isActive={bold.isActive}
      onClick={bold.toggle}
    />
  );
}
