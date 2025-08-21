import {
  ChevronDownIcon,
  ListIcon
} from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownList() {
  return (
    <ToolbarItem>
      <ListIcon size={16} />
      <ChevronDownIcon size={10} />
    </ToolbarItem>
  );
}
