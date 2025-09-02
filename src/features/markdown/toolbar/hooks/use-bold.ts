import { useMarkdown } from "@/entities/markdown";
import {
  useCallback,
  useMemo
} from "react";

export function useBold() {
  const markdown = useMarkdown();
  const markType =
    markdown.getMarkType("strong");

  const isActive = useMemo(
    () =>
      markdown.isMarkActive(markType),
    [markType, markdown]
  );

  const toggle = useCallback(
    () => markdown.toggleMark(markType),
    [markType, markdown]
  );

  return {
    isActive,
    toggle
  };
}
