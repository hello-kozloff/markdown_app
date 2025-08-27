import { Undo2Icon } from "lucide-react";
import { MarkdownToolbarItem } from "../markdown-toolbar-item";

export function Undo() {
  return (
    <MarkdownToolbarItem
      name="undo"
      icon={Undo2Icon}
    />
  );
}
