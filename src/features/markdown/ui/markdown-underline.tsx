import { UnderlineIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useMarkdownUnderline } from "@/features/markdown";

export function MarkdownUnderline() {
  const {
    isUnderline,
    toggleUnderline
  } = useMarkdownUnderline();

  return (
    <ToolbarItem
      isActive={isUnderline}
      onClick={toggleUnderline}
    >
      <UnderlineIcon size={16} />
    </ToolbarItem>
  );
}
