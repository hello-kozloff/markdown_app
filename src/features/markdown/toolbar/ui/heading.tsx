"use client";

import {
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  HeadingIcon
} from "lucide-react";
import {
  MarkdownToolbarItem,
  useMarkdownNode
} from "@/entities/markdown";

export function Heading() {
  const markdownNode = useMarkdownNode({
    node: "heading"
  });

  return (
    <MarkdownToolbarItem
      name="heading"
      icon={HeadingIcon}
      isActive={markdownNode.isActive()}
    >
      {[
        {
          name: "heading-1",
          icon: Heading1Icon,
          isActive:
            markdownNode.isActive({
              level: 1
            }),
          onClick: () =>
            markdownNode.toggle({
              level: 1
            })
        },
        {
          name: "heading-2",
          icon: Heading2Icon,
          isActive:
            markdownNode.isActive({
              level: 2
            }),
          onClick: () =>
            markdownNode.toggle({
              level: 2
            })
        },
        {
          name: "heading-3",
          icon: Heading3Icon,
          isActive:
            markdownNode.isActive({
              level: 3
            }),
          onClick: () =>
            markdownNode.toggle({
              level: 3
            })
        },
        {
          name: "heading-4",
          icon: Heading4Icon,
          isActive:
            markdownNode.isActive({
              level: 4
            }),
          onClick: () =>
            markdownNode.toggle({
              level: 4
            })
        },
        {
          name: "heading-5",
          icon: Heading5Icon,
          isActive:
            markdownNode.isActive({
              level: 5
            }),
          onClick: () =>
            markdownNode.toggle({
              level: 5
            })
        },
        {
          name: "heading-6",
          icon: Heading6Icon,
          isActive:
            markdownNode.isActive({
              level: 6
            }),
          onClick: () =>
            markdownNode.toggle({
              level: 6
            })
        }
      ]}
    </MarkdownToolbarItem>
  );
}
