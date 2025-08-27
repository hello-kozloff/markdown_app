"use client";

import { ListIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function List() {
  return (
    <MarkdownToolbarItem
      name="list"
      icon={ListIcon}
    />
  );
}
