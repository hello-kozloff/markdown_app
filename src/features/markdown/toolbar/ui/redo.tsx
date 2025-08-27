import { Redo2Icon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Redo() {
  return (
    <MarkdownToolbarItem
      name="redo"
      icon={Redo2Icon}
    />
  );
}
