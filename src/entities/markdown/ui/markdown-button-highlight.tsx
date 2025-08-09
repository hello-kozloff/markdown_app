import { Highlighter } from "lucide-react";
import { MarkdownButton } from "./markdown-button";

export function MarkdownButtonHighlight() {
  return (
    <MarkdownButton>
      <Highlighter size={16} />
    </MarkdownButton>
  );
}
