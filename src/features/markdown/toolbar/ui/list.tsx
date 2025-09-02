"use client";

import { ListIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";
import { useList } from "@/features/markdown/toolbar";

export function List() {
  const list = useList({
    nodes: [
      "bullet_list",
      "ordered_list"
    ]
  });

  return (
    <MarkdownToolbarItem
      name="list"
      icon={ListIcon}
      isActive={list.isActive}
    >
      {list.create()}
    </MarkdownToolbarItem>
  );
}
