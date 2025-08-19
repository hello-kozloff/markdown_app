import { TextQuoteIcon } from "lucide-react";
import { MarkdownTool } from "./markdown-tool";

export function MarkdownToolBlockquote() {
  return (
    <MarkdownTool>
      <TextQuoteIcon size={16} />
    </MarkdownTool>
  );
}
