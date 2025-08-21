import {
  type ClassValue,
  clsx
} from "clsx";
import { twMerge } from "tailwind-merge";
import { MarkType } from "prosemirror-model";
import { EditorState } from "prosemirror-state";

export function cn(
  ...inputs: ClassValue[]
) {
  return twMerge(clsx(inputs));
}

export function isMarkActive(
  mark: MarkType,
  state: EditorState
): boolean {
  const { from, $from, to, empty } =
    state.selection;

  return empty
    ? !!mark.isInSet(
        state.storedMarks ||
          $from.marks()
      )
    : state.doc.rangeHasMark(
        from,
        to,
        mark
      );
}

export function isNodeActive(
  state: EditorState,
  name: string,
  attrs: Record<string, string> = {}
) {
  const { from, to } = state.selection;

  let found = false;

  state.doc.nodesBetween(
    from,
    to,
    (node) => {
      if (node.type.name === name) {
        const hasAttrs = Object.entries(
          attrs
        ).every(
          ([key, value]) =>
            node.attrs[key] === value
        );

        if (hasAttrs) {
          found = true;
          return false;
        }
      }
      return !found;
    }
  );

  return found;
}
