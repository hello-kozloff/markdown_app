import { MarkdownGroup } from "./markdown-group";
import { MarkdownToolUndo } from "./markdown-tool-undo";
import { MarkdownToolRedo } from "./markdown-tool-redo";
import { MarkdownToolHeading } from "./markdown-tool-heading";
import { MarkdownToolList } from "./markdown-tool-list";
import { MarkdownToolBlockquote } from "./markdown-tool-blockquote";
import { MarkdownToolCodeBlock } from "./markdown-tool-code-block";
import { MarkdownToolImage } from "./markdown-tool-image";
import { MarkdownToolBold } from "./markdown-tool-bold";
import { MarkdownToolItalic } from "./markdown-tool-italic";
import { MarkdownToolUnderline } from "./markdown-tool-underline";
import { MarkdownToolStrike } from "./markdown-tool-strike";
import { MarkdownToolCodeInline } from "./markdown-tool-code-inline";
import { MarkdownToolHighlight } from "./markdown-tool-highlight";
import { MarkdownToolLink } from "./markdown-tool-link";
import { MarkdownToolAlignLeft } from "./markdown-tool-align-left";
import { MarkdownToolAlignCenter } from "./markdown-tool-align-center";
import { MarkdownToolAlignRight } from "./markdown-tool-align-right";
import { MarkdownToolAlignJustify } from "./markdown-tool-align-justify";

export function MarkdownToolbar() {
  return (
    <div className="flex justify-center">
      <div className="p-2 flex">
        <MarkdownGroup>
          <MarkdownToolUndo />
          <MarkdownToolRedo />
        </MarkdownGroup>
        <MarkdownGroup>
          <MarkdownToolHeading />
          <MarkdownToolList />
          <MarkdownToolBlockquote />
          <MarkdownToolCodeBlock />
          <MarkdownToolImage />
        </MarkdownGroup>
        <MarkdownGroup>
          <MarkdownToolBold />
          <MarkdownToolItalic />
          <MarkdownToolUnderline />
          <MarkdownToolStrike />
          <MarkdownToolCodeInline />
          <MarkdownToolHighlight />
          <MarkdownToolLink />
        </MarkdownGroup>
        <MarkdownGroup>
          <MarkdownToolAlignLeft />
          <MarkdownToolAlignCenter />
          <MarkdownToolAlignRight />
          <MarkdownToolAlignJustify />
        </MarkdownGroup>
      </div>
    </div>
  );
}
