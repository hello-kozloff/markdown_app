import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";

export const useMarkdownUnderline =
  () => {
    const state = useEditorState();

    const toggleUnderline =
      useEditorEventCallback((view) => {
        const toggleUnderlineMark =
          toggleMark(
            view.state.schema.marks
              .underline
          );

        toggleUnderlineMark(
          view.state,
          view.dispatch,
          view
        );

        view.focus();
      });

    const isUnderline = isMarkActive(
      state.schema.marks.underline,
      state
    );

    return {
      isUnderline,
      toggleUnderline
    };
  };
