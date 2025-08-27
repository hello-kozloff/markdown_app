import { SubscriptIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Subscript() {
  return (
    <MarkdownToolbarItem
      name="subscript"
      icon={SubscriptIcon}
    />
  );
}
