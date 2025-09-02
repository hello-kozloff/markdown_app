"use client";

import { ListIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useList } from "@/features/markdown/toolbar";

export function List() {
  const list = useList();

  return (
    <MarkdownToolbarItem
      name="list"
      icon={ListIcon}
    >
      {list.createConfig([
        "bullet_list",
        "ordered_list"
      ])}
    </MarkdownToolbarItem>
  );
}
