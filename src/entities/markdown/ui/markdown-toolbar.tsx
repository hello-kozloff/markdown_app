import { MarkdownInlineBlock } from "./markdown-inline-block";
import { MarkdownButtonUndo } from "./markdown-button-undo";
import { MarkdownButtonRedo } from "./markdown-button-redo";
import { MarkdownButtonHeading } from "./markdown-button-heading";
import { MarkdownButtonList } from "./markdown-button-list";
import { MarkdownButtonBlockquote } from "./markdown-button-blockquote";
import { MarkdownButtonCodeBlock } from "./markdown-button-code-block";
import { MarkdownButtonBold } from "./markdown-button-bold";
import { MarkdownButtonItalic } from "./markdown-button-italic";
import { MarkdownButtonStrike } from "./markdown-button-strike";
import { MarkdownButtonUnderline } from "./markdown-button-underline";
import { MarkdownButtonCode } from "./markdown-button-code";
import { MarkdownButtonHighlight } from "./markdown-button-highlight";
import { MarkdownButtonLink } from "./markdown-button-link";
import { MarkdownButtonSuperscript } from "./markdown-button-superscript";
import { MarkdownButtonSubscript } from "./markdown-button-subscript";
import { MarkdownButtonAlignLeft } from "./markdown-button-align-left";
import { MarkdownButtonAlignCenter } from "./markdown-button-align-center";
import { MarkdownButtonAlignRight } from "./markdown-button-align-right";
import { MarkdownButtonAlignJustify } from "./markdown-button-align-justify";
import { MarkdownButtonImage } from "./markdown-button-image";

export function MarkdownToolbar() {
  return (
    <div className="fixed inset-x-0 top-0 border-b bg-background">
      <div className="flex justify-center">
        <div className="p-3 flex">
          <MarkdownInlineBlock>
            <MarkdownButtonUndo />
            <MarkdownButtonRedo />
          </MarkdownInlineBlock>
          <MarkdownInlineBlock>
            <MarkdownButtonHeading />
            <MarkdownButtonList />
            <MarkdownButtonBlockquote />
            <MarkdownButtonCodeBlock />
          </MarkdownInlineBlock>
          <MarkdownInlineBlock>
            <MarkdownButtonBold />
            <MarkdownButtonItalic />
            <MarkdownButtonUnderline />
            <MarkdownButtonStrike />
            <MarkdownButtonCode />
            <MarkdownButtonHighlight />
            <MarkdownButtonLink />
          </MarkdownInlineBlock>
          <MarkdownInlineBlock>
            <MarkdownButtonSuperscript />
            <MarkdownButtonSubscript />
          </MarkdownInlineBlock>
          <MarkdownInlineBlock>
            <MarkdownButtonAlignLeft />
            <MarkdownButtonAlignCenter />
            <MarkdownButtonAlignRight />
            <MarkdownButtonAlignJustify />
          </MarkdownInlineBlock>
          <MarkdownInlineBlock>
            <MarkdownButtonImage />
          </MarkdownInlineBlock>
        </div>
      </div>
    </div>
  );
}
