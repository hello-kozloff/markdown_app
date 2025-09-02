import { useMarkdown } from "@/entities/markdown";
import {
  useCallback,
  useMemo
} from "react";

export function useBlockquote() {
  const markdown = useMarkdown();
  const nodeType = markdown.getNodeType(
    "blockquote"
  );

  const isActive = useMemo(
    () =>
      markdown.isNodeActive(nodeType),
    [markdown, nodeType]
  );

  const toggle = useCallback(() => {
    if (
      markdown.isNodeActive(nodeType)
    ) {
      return markdown.lift();
    }
    return markdown.wrapIn(nodeType);
  }, [markdown, nodeType]);

  return {
    isActive,
    toggle
  };
}
