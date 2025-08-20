import { HighlighterIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownHighlight() {
  return (
    <ToolbarItem>
      <HighlighterIcon size={16} />
    </ToolbarItem>
  );
}
