import { AlignRightIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function AlignRight() {
  return (
    <MarkdownToolbarItem
      name="align-right"
      icon={AlignRightIcon}
    />
  );
}
