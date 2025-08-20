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
import { Toolbar, ToolbarBlock } from "@/shared/ui/toolbar";

export function MarkdownToolbar() {
  return (
    <div className="flex justify-center">
      <Toolbar>
        <ToolbarBlock>
          <MarkdownUndo />
          <MarkdownRedo />
        </ToolbarBlock>
        <ToolbarBlock>
          <MarkdownHeading />
          <MarkdownList />
          <MarkdownBlockquote />
          <MarkdownCodeBlock />
          <MarkdownImage />
        </ToolbarBlock>
        <ToolbarBlock>
          <MarkdownBold />
          <MarkdownItalic />
          <MarkdownUnderline />
          <MarkdownStrike />
          <MarkdownCodeInline />
          <MarkdownHighlight />
          <MarkdownLink />
        </ToolbarBlock>
        <ToolbarBlock>
          <MarkdownAlignLeft />
          <MarkdownAlignCenter />
          <MarkdownAlignRight />
          <MarkdownAlignJustify />
        </ToolbarBlock>
      </Toolbar>
    </div>
  );
}
