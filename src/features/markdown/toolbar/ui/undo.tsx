import { Undo2Icon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Undo() {
  return (
    <MarkdownToolbarItem
      name="undo"
      icon={Undo2Icon}
    />
  );
}
