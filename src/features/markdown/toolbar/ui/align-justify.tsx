import { AlignJustifyIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function AlignJustify() {
  return (
    <MarkdownToolbarItem
      name="align-justify"
      icon={AlignJustifyIcon}
    />
  );
}
