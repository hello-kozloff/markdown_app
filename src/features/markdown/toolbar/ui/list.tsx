"use client";

import { ListIcon } from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdown
} from "@/entities/markdown";

export function List() {
  const markdown = useMarkdown();

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
            markdown.wrapIn(
              markdown.getNodeType(
                "bullet_list"
              )
            )
        },
        {
          name: "ordered-list",
          icon: ListIcon,
          onClick: () =>
            markdown.wrapIn(
              markdown.getNodeType(
                "ordered_list"
              )
            )
        }
      ]}
    </MarkdownToolbarItem>
  );
}
