import { Strikethrough } from "lucide-react";
import { MarkdownButton } from "./markdown-button";

export function MarkdownButtonStrike() {
  return (
    <MarkdownButton>
      <Strikethrough size={16} />
    </MarkdownButton>
  );
}
