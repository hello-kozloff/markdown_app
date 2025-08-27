import { LinkIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Link() {
  return (
    <MarkdownToolbarItem
      name="link"
      icon={LinkIcon}
    />
  );
}
