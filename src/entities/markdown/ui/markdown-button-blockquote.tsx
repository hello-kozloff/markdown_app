import { TextQuote } from "lucide-react";
import { MarkdownButton } from "./markdown-button";

export function MarkdownButtonBlockquote() {
  return (
    <MarkdownButton>
      <TextQuote size={16} />
    </MarkdownButton>
  );
}
