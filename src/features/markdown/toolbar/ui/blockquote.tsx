import { TextQuoteIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Blockquote() {
  return (
    <MarkdownToolbarItem
      name="blockquote"
      icon={TextQuoteIcon}
    />
  );
}
