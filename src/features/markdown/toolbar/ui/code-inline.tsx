import { CodeXmlIcon } from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function CodeInline() {
  // const markdownMark = useMarkdownMark({
  //   mark: "code"
  // });

  return (
    <MarkdownToolbarItem
      name="code-inline"
      icon={CodeXmlIcon}
      // isActive={markdownMark.isActive}
      // onClick={markdownMark.toggle}
    />
  );
}
