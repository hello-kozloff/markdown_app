"use client";

import { ListIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdownNode
} from "@/entities/markdown";

export function List() {
  const markdownNode =
    useMarkdownNode();

  return (
    <MarkdownToolbarItem
      name="list"
      icon={ListIcon}
    >
      {[
        {
          name: "bullet-list",
          icon: ListIcon,
          onClick: () =>
            markdownNode.toggle(
              "bullet_list"
            )
        },
        {
          name: "ordered-list",
          icon: ListIcon,
          onClick: () =>
            markdownNode.toggle(
              "ordered_list"
            )
        }
      ]}
    </MarkdownToolbarItem>
  );
}