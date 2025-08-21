import {
  ChevronDownIcon,
  HeadingIcon
} from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownHeading() {
  return (
    <ToolbarItem>
      <HeadingIcon size={16} />
      <ChevronDownIcon size={10} />
    </ToolbarItem>
  );
}
