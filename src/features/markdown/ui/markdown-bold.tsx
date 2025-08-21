import { BoldIcon } from "lucide-react";
import { useMarkdownMark } from "@/features/markdown";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownBold() {
  const markdownMark = useMarkdownMark({
    mark: "strong"
  });

  return (
    <ToolbarItem
      isActive={markdownMark.isActive}
      onClick={markdownMark.toggle}
    >
      <BoldIcon size={16} />
    </ToolbarItem>
  );
}
