import { ItalicIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useMarkdownMark } from "@/features/markdown";

export function MarkdownItalic() {
  const markdownMark = useMarkdownMark({
    mark: "em"
  });

  return (
    <ToolbarItem
      isActive={markdownMark.isActive}
      onClick={markdownMark.toggle}
    >
      <ItalicIcon size={16} />
    </ToolbarItem>
  );
}
