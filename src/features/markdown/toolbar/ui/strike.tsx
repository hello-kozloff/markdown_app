import { StrikethroughIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Strike() {
  // const markdownMark = useMarkdownMark({
  //   mark: "strike"
  // });

  return (
    <MarkdownToolbarItem
      name="strike"
      icon={StrikethroughIcon}
      // isActive={markdownMark.isActive}
      // onClick={markdownMark.toggle}
    />
  );
}
