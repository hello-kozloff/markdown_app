import { StrikethroughIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownStrike() {
  return (
    <ToolbarItem>
      <StrikethroughIcon size={16} />
    </ToolbarItem>
  );
}
