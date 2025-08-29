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
import { MarkdownToolbarItem, useMarkdown } from "@/entities/markdown";

export const icons = [
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon
];

export function Heading() {
  const markdown = useMarkdown();
  const nodeType =
    markdown.getNodeType("heading");

  return (
    <MarkdownToolbarItem
      name="heading"
      icon={HeadingIcon}
      isActive={markdown.isNodeActive(
        nodeType
      )}
    >
      {Array.from({
        length: 6
      }).map((_, index) => {
        const level = index + 1;
        const name = `heading-${level}`;
        const icon = icons[index];

        const isActive =
          markdown.isNodeActive(
            nodeType,
            { level }
          );

        const onClick = () => {
          if (isActive) {
            return markdown.setBlockType(
              markdown.getNodeType(
                "paragraph"
              )
            );
          }

          return markdown.setBlockType(
            nodeType,
            { level }
          );
        };

        return {
          name,
          icon,
          isActive,
          onClick
        };
      })}
    </MarkdownToolbarItem>
  );
}
