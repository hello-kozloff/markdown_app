import { MessageSquareCode } from "lucide-react";
import { MarkdownButton } from "./markdown-button";

export function MarkdownButtonCodeBlock() {
  return (
    <MarkdownButton>
      <MessageSquareCode size={16} />
    </MarkdownButton>
  );
}
