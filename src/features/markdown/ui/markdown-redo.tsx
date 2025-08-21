import { Redo2Icon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownRedo() {
  return (
    <ToolbarItem disabled>
      <Redo2Icon size={16} />
    </ToolbarItem>
  );
}
