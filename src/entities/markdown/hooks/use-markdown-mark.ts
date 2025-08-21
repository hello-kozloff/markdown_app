import { useMemo } from "react";
import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";

export interface UseMarkdownMarkProps {
  mark: string;
}

export const useMarkdownMark = ({
  mark
}: UseMarkdownMarkProps) => {
  const state = useEditorState();

  const isActive = useMemo(() => {
    return isMarkActive(
      state.schema.marks[mark],
      state
    );
  }, [mark, state]);

  const toggle = useEditorEventCallback(
    (view) =>
      toggleMark(
        view.state.schema.marks[mark]
      )(view.state, view.dispatch, view)
  );

  return {
    isActive,
    toggle
  };
};
