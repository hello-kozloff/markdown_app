import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { ItalicIcon } from "lucide-react";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";
import { MarkdownTool } from "./markdown-tool";

export function MarkdownToolItalic() {
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
    <MarkdownTool
      onClick={toggleItalic}
      isActive={isMarkActive(
        state.schema.marks["em"],
        state
      )}
    >
      <ItalicIcon size={16} />
    </MarkdownTool>
  );
}
