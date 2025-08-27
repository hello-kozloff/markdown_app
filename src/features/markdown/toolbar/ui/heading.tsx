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
  useMarkdown
} from "@/entities/markdown";

export function Heading() {
  const markdown = useMarkdown();

  return (
    <MarkdownToolbarItem
      name="heading"
      icon={HeadingIcon}
      isActive={markdown.isNodeActive(
        "heading"
      )}
    >
      {Array.from({
        length: 6
      }).map((_, index) => ({
        name: `heading-${index + 1}`,
        icon: [
          Heading1Icon,
          Heading2Icon,
          Heading3Icon,
          Heading4Icon,
          Heading5Icon,
          Heading6Icon
        ][index],
        isActive: markdown.isNodeActive(
          "heading",
          { level: index + 1 }
        ),
        onClick: () =>
          markdown.setBlockType(
            markdown.getNodeType(
              "heading"
            ),
            { level: index + 1 }
          )
      }))}
    </MarkdownToolbarItem>
  );
}
