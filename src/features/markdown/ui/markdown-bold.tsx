import { BoldIcon } from "lucide-react";
import { useMarkdownBold } from "@/features/markdown";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownBold() {
  const { isBold, toggleBold } =
    useMarkdownBold();

  return (
    <ToolbarItem
      onClick={toggleBold}
      isActive={isBold}
    >
      <BoldIcon size={16} />
    </ToolbarItem>
  );
}
