import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { BoldIcon } from "lucide-react";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";
import { MarkdownTool } from "./markdown-tool";

export function MarkdownToolBold() {
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
    <MarkdownTool
      onClick={toggleBold}
      isActive={isMarkActive(
        state.schema.marks["strong"],
        state
      )}
    >
      <BoldIcon size={16} />
    </MarkdownTool>
  );
}
