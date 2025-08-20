import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { BoldIcon } from "lucide-react";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";
import { ToolbarItem } from "@/___DEV___/shared/ui/toolbar";

export function MarkdownBold() {
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
    <ToolbarItem
      onClick={toggleBold}
      isActive={isMarkActive(
        state.schema.marks["strong"],
        state
      )}
    >
      <BoldIcon size={16} />
    </ToolbarItem>
  );
}
