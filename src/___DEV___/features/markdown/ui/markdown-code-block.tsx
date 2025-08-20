import { MessageSquareCodeIcon } from "lucide-react";
import { MenuButton } from "../../../shared/ui/menu-button";

export function MarkdownCodeBlock() {
  return (
    <MenuButton>
      <MessageSquareCodeIcon
        size={16}
      />
    </MenuButton>
  );
}
