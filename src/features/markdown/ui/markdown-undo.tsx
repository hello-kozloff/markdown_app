import { Undo2Icon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownUndo() {
  return (
    <ToolbarItem disabled>
      <Undo2Icon size={16} />
    </ToolbarItem>
  );
}
