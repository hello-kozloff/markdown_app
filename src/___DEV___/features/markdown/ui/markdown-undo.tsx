import { Undo2Icon } from "lucide-react";
import { MenuButton } from "../../../shared/ui/menu-button";

export function MarkdownUndo() {
  return (
    <MenuButton>
      <Undo2Icon size={16} />
    </MenuButton>
  );
}
