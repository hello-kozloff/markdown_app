import { UnderlineIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useMarkdownMark } from "@/features/markdown";

export function MarkdownUnderline() {
  const markdownMark = useMarkdownMark({
    mark: "underline"
  });

  return (
    <ToolbarItem
      isActive={markdownMark.isActive}
      onClick={markdownMark.toggle}
    >
      <UnderlineIcon size={16} />
    </ToolbarItem>
  );
}
