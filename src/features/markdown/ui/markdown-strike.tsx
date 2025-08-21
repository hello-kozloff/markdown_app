import { StrikethroughIcon } from "lucide-react";
import { useMarkdownMark } from "@/entities/markdown";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownStrike() {
  const markdownMark = useMarkdownMark({
    mark: "strike"
  });

  return (
    <ToolbarItem
      isActive={markdownMark.isActive}
      onClick={markdownMark.toggle}
    >
      <StrikethroughIcon size={16} />
    </ToolbarItem>
  );
}
