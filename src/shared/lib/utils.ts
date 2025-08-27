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
  state: EditorState,
  markType: MarkType
): boolean {
  const { from, $from, to, empty } =
    state.selection;

  return empty
    ? !!markType.isInSet(
        state.storedMarks ||
          $from.marks()
      )
    : state.doc.rangeHasMark(
        from,
        to,
        markType
      );
}

export function isNodeActive(
  state: EditorState,
  name: string,
  attrs: Record<
    string,
    string | number
  > = {}
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

export function generateKey(
  name: string,
  baseName: string,
  index: number
) {
  return `${baseName}-${name}-${index}`;
}
