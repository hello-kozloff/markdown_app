import { StrikethroughIcon } from "lucide-react";
import { MenuButton } from "../../../shared/ui/menu-button";

export function MarkdownStrike() {
  return (
    <MenuButton>
      <StrikethroughIcon size={16} />
    </MenuButton>
  );
}
