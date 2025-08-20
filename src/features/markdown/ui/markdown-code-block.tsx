import { MessageSquareCodeIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownCodeBlock() {
  return (
    <ToolbarItem>
      <MessageSquareCodeIcon
        size={16}
      />
    </ToolbarItem>
  );
}
