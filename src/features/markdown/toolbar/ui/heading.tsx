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
        const name = `heading-${index + 1}`;

        const icon = [
          Heading1Icon,
          Heading2Icon,
          Heading3Icon,
          Heading4Icon,
          Heading5Icon,
          Heading6Icon
        ][index];

        const isActive =
          markdown.isNodeActive(
            nodeType,
            { level: index + 1 }
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
            { level: index + 1 }
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
