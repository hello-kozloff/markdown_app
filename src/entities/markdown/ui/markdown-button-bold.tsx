import { Bold } from "lucide-react";
import { useEditorEventCallback, useEditorState } from "@handlewithcare/react-prosemirror";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";
import { MarkdownButton } from "./markdown-button";

export function MarkdownButtonBold() {
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

  return (
    <MarkdownButton
      onClick={toggleBold}
      isActive={isMarkActive(
        state.schema.marks["strong"],
        state
      )}
    >
      <Bold size={16} />
    </MarkdownButton>
  );
}
