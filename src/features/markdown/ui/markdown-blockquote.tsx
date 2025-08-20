import { TextQuoteIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownBlockquote() {
  return (
    <ToolbarItem>
      <TextQuoteIcon size={16} />
    </ToolbarItem>
  );
}
