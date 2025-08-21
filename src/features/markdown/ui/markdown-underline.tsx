import { UnderlineIcon } from "lucide-react";
import { useMarkdownMark } from "@/entities/markdown";
import { ToolbarItem } from "@/shared/ui/toolbar";

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
