import { CodeXmlIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownCodeInline() {
  return (
    <ToolbarItem>
      <CodeXmlIcon size={16} />
    </ToolbarItem>
  );
}
