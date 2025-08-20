import { TextQuoteIcon } from "lucide-react";
import { ToolbarItem } from "@/___DEV___/shared/ui/toolbar";

export function MarkdownBlockquote() {
  return (
    <ToolbarItem>
      <TextQuoteIcon size={16} />
    </ToolbarItem>
  );
}
