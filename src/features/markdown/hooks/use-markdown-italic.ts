import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";

export const useMarkdownItalic = () => {
  const state = useEditorState();

  const toggleItalic =
    useEditorEventCallback((view) => {
      const toggleItalicMark =
        toggleMark(
          view.state.schema.marks["em"]
        );

      toggleItalicMark(
        view.state,
        view.dispatch,
        view
      );

      view.focus();
    });

  const isItalic = isMarkActive(
    state.schema.marks["em"],
    state
  );

  return {
    isItalic,
    toggleItalic
  };
};
