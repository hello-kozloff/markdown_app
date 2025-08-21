import { HighlighterIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useMarkdownMark } from "@/entities/markdown";

export function MarkdownHighlight() {
  const markdownMark = useMarkdownMark({
    mark: "highlight"
  });

  return (
    <ToolbarItem
      isActive={markdownMark.isActive}
      onClick={markdownMark.toggle}
    >
      <HighlighterIcon size={16} />
    </ToolbarItem>
  );
}
