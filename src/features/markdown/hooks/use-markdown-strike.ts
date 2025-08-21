import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";

export const useMarkdownStrike = () => {
  const state = useEditorState();

  const toggleStrike =
    useEditorEventCallback((view) => {
      const toggleStrikeMark =
        toggleMark(
          view.state.schema.marks.strike
        );

      toggleStrikeMark(
        view.state,
        view.dispatch,
        view
      );

      view.focus();
    });

  const isStrike = isMarkActive(
    state.schema.marks.strike,
    state
  );

  return {
    isStrike,
    toggleStrike
  };
};
