import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { ItalicIcon } from "lucide-react";
import { toggleMark } from "prosemirror-commands";
import { isMarkActive } from "@/shared/lib/utils";
import { MenuButton } from "../../../shared/ui/menu-button";

export function MarkdownItalic() {
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
    <MenuButton
      onClick={toggleItalic}
      isActive={isMarkActive(
        state.schema.marks["em"],
        state
      )}
    >
      <ItalicIcon size={16} />
    </MenuButton>
  );
}
