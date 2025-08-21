import { useMemo } from "react";
import { useEditorEventCallback, useEditorState } from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";

export interface UseMarkdownMarkProps {
  mark: string;
}

export const useMarkdownMark = ({
  mark
}: UseMarkdownMarkProps) => {
  const state = useEditorState();

  const toggle = useEditorEventCallback(
    (view) => {
      const toggleBoldMark = toggleMark(
        view.state.schema.marks[mark]
      );

      toggleBoldMark(
        view.state,
        view.dispatch,
        view
      );

      view.focus();
    }
  );

  const isActive = useMemo(() => {
    return isMarkActive(
      state.schema.marks[mark],
      state
    );
  }, [mark, state]);

  return {
    isActive,
    toggle
  };
};