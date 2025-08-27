import { AlignCenterIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function AlignCenter() {
  return (
    <MarkdownToolbarItem
      name="align-center"
      icon={AlignCenterIcon}
    />
  );
}
