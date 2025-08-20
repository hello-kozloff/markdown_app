import { HighlighterIcon } from "lucide-react";
import { MenuButton } from "../../../shared/ui/menu-button";

export function MarkdownHighlight() {
  return (
    <MenuButton>
      <HighlighterIcon size={16} />
    </MenuButton>
  );
}
