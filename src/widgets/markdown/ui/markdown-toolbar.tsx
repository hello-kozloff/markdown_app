import {
  MarkdownAlignCenter,
  MarkdownAlignJustify,
  MarkdownAlignLeft,
  MarkdownAlignRight,
  MarkdownBlockquote,
  MarkdownBold,
  MarkdownCodeBlock,
  MarkdownCodeInline,
  MarkdownHeading,
  MarkdownHighlight,
  MarkdownImage,
  MarkdownItalic,
  MarkdownLink,
  MarkdownList,
  MarkdownRedo,
  MarkdownStrike,
  MarkdownUnderline,
  MarkdownUndo
} from "@/features/markdown";
import {
  Toolbar,
  ToolbarGroup
} from "@/shared/ui/toolbar";

export function MarkdownToolbar() {
  return (
    <Toolbar>
      <ToolbarGroup>
        <MarkdownUndo />
        <MarkdownRedo />
      </ToolbarGroup>
      <ToolbarGroup>
        <MarkdownHeading />
        <MarkdownList />
        <MarkdownBlockquote />
        <MarkdownCodeBlock />
        <MarkdownImage />
      </ToolbarGroup>
      <ToolbarGroup>
        <MarkdownBold />
        <MarkdownItalic />
        <MarkdownUnderline />
        <MarkdownStrike />
        <MarkdownCodeInline />
        <MarkdownHighlight />
        <MarkdownLink />
      </ToolbarGroup>
      <ToolbarGroup>
        <MarkdownAlignLeft />
        <MarkdownAlignCenter />
        <MarkdownAlignRight />
        <MarkdownAlignJustify />
      </ToolbarGroup>
    </Toolbar>
  );
}
