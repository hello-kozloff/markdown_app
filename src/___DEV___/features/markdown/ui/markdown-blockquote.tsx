import { TextQuoteIcon } from "lucide-react";
import { MenuButton } from "../../../shared/ui/menu-button";

export function MarkdownBlockquote() {
  return (
    <MenuButton>
      <TextQuoteIcon size={16} />
    </MenuButton>
  );
}
