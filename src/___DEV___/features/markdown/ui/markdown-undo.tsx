import { Undo2Icon } from "lucide-react";
import { ToolbarItem } from "@/___DEV___/shared/ui/toolbar";

export function MarkdownUndo() {
  return (
    <ToolbarItem>
      <Undo2Icon size={16} />
    </ToolbarItem>
  );
}
