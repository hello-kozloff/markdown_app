import { useEditorEventCallback, useEditorState } from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";

export const useMarkdownBold = () => {
  const state = useEditorState();

  const toggleBold =
    useEditorEventCallback((view) => {
      const toggleBoldMark = toggleMark(
        view.state.schema.marks[
          "strong"
        ]
      );

      toggleBoldMark(
        view.state,
        view.dispatch,
        view
      );

      view.focus();
    });

  const isBold = isMarkActive(
    state.schema.marks["strong"],
    state
  );

  return {
    isBold,
    toggleBold
  };
};