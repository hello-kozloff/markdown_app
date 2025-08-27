import { MessageSquareCodeIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function CodeBlock() {
  return (
    <MarkdownToolbarItem
      name="code-block"
      icon={MessageSquareCodeIcon}
    />
  );
}
