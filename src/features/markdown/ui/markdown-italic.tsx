import { ItalicIcon } from "lucide-react";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useMarkdownItalic } from "@/features/markdown";

export function MarkdownItalic() {
  const { isItalic, toggleItalic } =
    useMarkdownItalic();

  return (
    <ToolbarItem
      isActive={isItalic}
      onClick={toggleItalic}
    >
      <ItalicIcon size={16} />
    </ToolbarItem>
  );
}
