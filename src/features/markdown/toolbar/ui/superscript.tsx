import { SuperscriptIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Superscript() {
  return (
    <MarkdownToolbarItem
      name="superscript"
      icon={SuperscriptIcon}
    />
  );
}
