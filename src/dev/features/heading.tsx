import { Undo2Icon } from "lucide-react";
import { MarkdownToolbarItem } from "../markdown-toolbar-item";

export function Heading() {
  return (
    <MarkdownToolbarItem
      name="heading"
      icon={Undo2Icon}
    >
      {[
        {
          name: "heading-1",
          icon: Undo2Icon,
          attrs: { level: 1 }
        },
        {
          name: "heading-2",
          icon: Undo2Icon,
          attrs: { level: 2 }
        },
        {
          name: "heading-3",
          icon: Undo2Icon,
          attrs: { level: 3 }
        },
        {
          name: "heading-4",
          icon: Undo2Icon,
          attrs: { level: 4 }
        }
      ]}
    </MarkdownToolbarItem>
  );
}
