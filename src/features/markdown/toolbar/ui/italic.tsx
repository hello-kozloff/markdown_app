import { ItalicIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Italic() {
  // const markdownMark = useMarkdownMark({
  //   mark: "em"
  // });

  return (
    <MarkdownToolbarItem
      name="italic"
      icon={ItalicIcon}
      // isActive={markdownMark.isActive}
      // onClick={markdownMark.toggle}
    />
  );
}
