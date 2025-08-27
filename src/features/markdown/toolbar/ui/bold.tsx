import { BoldIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Bold() {
  // const markdownMark = useMarkdownMark({
  //   mark: "strong"
  // });

  return (
    <MarkdownToolbarItem
      name="bold"
      icon={BoldIcon}
      // isActive={markdownMark.isActive}
      // onClick={markdownMark.toggle}
    />
  );
}
