import { useCallback, useMemo } from "react";
import { useMarkdown } from "@/entities/markdown";

export function useItalic() {
  const markdown = useMarkdown();
  const markType =
    markdown.getMarkType("em");

  const isActive = useMemo(
    () =>
      markdown.isMarkActive(markType),
    [markType, markdown]
  );

  const toggle = useCallback(
    () => markdown.toggleMark(markType),
    [markType, markdown]
  );

  return { isActive, toggle };
}