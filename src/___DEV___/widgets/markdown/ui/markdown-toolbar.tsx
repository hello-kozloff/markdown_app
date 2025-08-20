import { MenuGroup } from "../../../shared/ui/menu-group";
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
} from "@/___DEV___/features/markdown";

export function MarkdownToolbar() {
  return (
    <div className="flex justify-center">
      <div className="p-2 flex">
        <MenuGroup>
          <MarkdownUndo />
          <MarkdownRedo />
        </MenuGroup>
        <MenuGroup>
          <MarkdownHeading />
          <MarkdownList />
          <MarkdownBlockquote />
          <MarkdownCodeBlock />
          <MarkdownImage />
        </MenuGroup>
        <MenuGroup>
          <MarkdownBold />
          <MarkdownItalic />
          <MarkdownUnderline />
          <MarkdownStrike />
          <MarkdownCodeInline />
          <MarkdownHighlight />
          <MarkdownLink />
        </MenuGroup>
        <MenuGroup>
          <MarkdownAlignLeft />
          <MarkdownAlignCenter />
          <MarkdownAlignRight />
          <MarkdownAlignJustify />
        </MenuGroup>
      </div>
    </div>
  );
}
