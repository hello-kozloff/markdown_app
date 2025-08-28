import { Schema } from "prosemirror-model";
import {
  redo,
  undo
} from "prosemirror-history";
import { undoInputRule } from "prosemirror-inputrules";
import {
  chainCommands,
  exitCode,
  joinDown,
  joinUp,
  lift,
  selectParentNode,
  setBlockType,
  toggleMark,
  wrapIn
} from "prosemirror-commands";
import {
  sinkListItem,
  splitListItem,
  wrapInList
} from "prosemirror-schema-list";
import {
  EditorState,
  Transaction
} from "prosemirror-state";

export const buildKeyMap = (
  schema: Schema
) => {
  let keyMap = {
    "Mod-z": undo,
    "Shift-Mod-z": redo,
    Backspace: undoInputRule
  };

  keyMap = {
    ...keyMap,
    ...{
      "Alt-ArrowUp": joinUp,
      "Alt-ArrowDown": joinDown,
      "Mod-[": lift,
      Escape: selectParentNode
    }
  };

  if (schema.marks.strong)
    keyMap = {
      ...keyMap,
      ...{
        "Mod-b": toggleMark(
          schema.marks.strong
        ),
        "Mod-B": toggleMark(
          schema.marks.strong
        )
      }
    };
  if (schema.marks.em)
    keyMap = {
      ...keyMap,
      ...{
        "Mod-i": toggleMark(
          schema.marks.em
        ),
        "Mod-I": toggleMark(
          schema.marks.em
        )
      }
    };
  if (schema.marks.code)
    keyMap = {
      ...keyMap,
      ...{
        "Mod-`": toggleMark(
          schema.marks.code
        )
      }
    };
  if (schema.nodes.bullet_list)
    keyMap = {
      ...keyMap,
      ...{
        "Shift-Ctrl-8": wrapInList(
          schema.nodes.bullet_list
        )
      }
    };
  if (schema.nodes.ordered_list)
    keyMap = {
      ...keyMap,
      ...{
        "Shift-Ctrl-9": wrapInList(
          schema.nodes.ordered_list
        )
      }
    };
  if (schema.nodes.blockquote)
    keyMap = {
      ...keyMap,
      ...{
        "Ctrl->": wrapIn(
          schema.nodes.blockquote
        )
      }
    };
  if (schema.nodes.hard_break) {
    const cmd = chainCommands(
      exitCode,
      (state, dispatch) => {
        if (!dispatch) return false;
        dispatch(
          state.tr
            .replaceSelectionWith(
              schema.nodes.hard_break.create()
            )
            .scrollIntoView()
        );
        return true;
      }
    );

    keyMap = {
      ...keyMap,
      ...{
        "Mod-Enter": cmd,
        "Shift-Enter": cmd
      }
    };
  }
  if (schema.nodes.list_item)
    keyMap = {
      ...keyMap,
      ...{
        Enter: splitListItem(
          schema.nodes.list_item
        ),
        "Mod-]": sinkListItem(
          schema.nodes.list_item
        )
      }
    };
  if (schema.nodes.paragraph)
    keyMap = {
      ...keyMap,
      ...{
        "Shift-Ctrl-0": setBlockType(
          schema.nodes.paragraph
        )
      }
    };
  if (schema.nodes.code_block)
    keyMap = {
      ...keyMap,
      ...{
        "Shift-Ctrl-\\": setBlockType(
          schema.nodes.code_block
        )
      }
    };
  if (schema.nodes.heading) {
    const headingLevels = Array.from(
      { length: 6 },
      (_, i) => ++i
    );
    const headingMap =
      headingLevels.reduce(
        (acc, level) => ({
          ...acc,
          ...{
            [`Shift-Ctrl-${level}`]:
              setBlockType(
                schema.nodes.heading,
                { level }
              )
          }
        }),
        {}
      );

    keyMap = {
      ...keyMap,
      ...headingMap
    };
  }

  if (schema.nodes.horizontal_rule)
    keyMap = {
      ...keyMap,
      ...{
        "Mod-_": (
          state: EditorState,
          dispatch: (
            tr: Transaction
          ) => void
        ) => {
          dispatch(
            state.tr
              .replaceSelectionWith(
                schema.nodes.horizontal_rule.create()
              )
              .scrollIntoView()
          );
          return true;
        }
      }
    };

  return keyMap;
};
