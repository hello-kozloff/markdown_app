import { Undo2Icon } from "lucide-react";
import { MarkdownToolbarItem } from "../markdown-toolbar-item";

export function Redo() {
  return (
    <MarkdownToolbarItem
      name="redo"
      icon={Undo2Icon}
    />
  );
}
