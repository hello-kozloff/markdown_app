import { CodeXmlIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useMarkdownCodeInline } from "@/features/markdown";

export function MarkdownCodeInline() {
  const {
    isCodeInline,
    toggleCodeInline
  } = useMarkdownCodeInline();

  return (
    <ToolbarItem
      isActive={isCodeInline}
      onClick={toggleCodeInline}
    >
      <CodeXmlIcon size={16} />
    </ToolbarItem>
  );
}
