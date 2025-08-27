"use client";

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Blockquote,
  Bold,
  CodeBlock,
  CodeInline,
  Heading,
  Highlight,
  Image,
  Italic,
  Link,
  List,
  Redo,
  Strike,
  Underline,
  Undo
} from "@/features/markdown/toolbar";
import {
  Toolbar,
  ToolbarGroup
} from "@/shared/ui/toolbar";

export function MarkdownToolbar() {
  return (
    <Toolbar sticky>
      <ToolbarGroup>
        <Undo />
        <Redo />
      </ToolbarGroup>
      <ToolbarGroup>
        <Heading />
        <List />
        <Blockquote />
        <CodeBlock />
        <Image />
      </ToolbarGroup>
      <ToolbarGroup>
        <Bold />
        <Italic />
        <Underline />
        <Strike />
        <CodeInline />
        <Highlight />
        <Link />
      </ToolbarGroup>
      <ToolbarGroup>
        <AlignLeft />
        <AlignCenter />
        <AlignRight />
        <AlignJustify />
      </ToolbarGroup>
    </Toolbar>
  );
}
