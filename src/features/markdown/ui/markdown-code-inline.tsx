import { CodeXmlIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useMarkdownMark } from "@/features/markdown";

export function MarkdownCodeInline() {
  const markdownMark = useMarkdownMark({
    mark: "code"
  });

  return (
    <ToolbarItem
      isActive={markdownMark.isActive}
      onClick={markdownMark.toggle}
    >
      <CodeXmlIcon size={16} />
    </ToolbarItem>
  );
}
