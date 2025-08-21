import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";

export const useMarkdownCodeInline =
  () => {
    const state = useEditorState();

    const toggleCodeInline =
      useEditorEventCallback((view) => {
        const toggleCodeInlineMark =
          toggleMark(
            view.state.schema.marks.code
          );

        toggleCodeInlineMark(
          view.state,
          view.dispatch,
          view
        );

        view.focus();
      });

    const isCodeInline = isMarkActive(
      state.schema.marks.code,
      state
    );

    return {
      isCodeInline,
      toggleCodeInline
    };
  };
