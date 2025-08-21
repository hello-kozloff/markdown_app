import { StrikethroughIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useMarkdownStrike } from "@/features/markdown";

export function MarkdownStrike() {
  const { isStrike, toggleStrike } =
    useMarkdownStrike();

  return (
    <ToolbarItem
      isActive={isStrike}
      onClick={toggleStrike}
    >
      <StrikethroughIcon size={16} />
    </ToolbarItem>
  );
}
