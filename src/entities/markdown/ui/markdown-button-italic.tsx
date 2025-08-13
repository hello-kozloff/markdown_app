import { Italic } from "lucide-react";
import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";
import { MarkdownButton } from "./markdown-button";

export function MarkdownButtonItalic() {
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

  return (
    <MarkdownButton
      onClick={toggleItalic}
      isActive={isMarkActive(
        state.schema.marks["em"],
        state
      )}
    >
      <Italic size={16} />
    </MarkdownButton>
  );
}
