import {
  type ClassValue,
  clsx
} from "clsx";
import { twMerge } from "tailwind-merge";
import {
  MarkType,
  NodeType
} from "prosemirror-model";
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
  nodeType: NodeType,
  attrs: Record<
    string,
    string | number
  > = {}
) {
  let found = false;

  state.doc.nodesBetween(
    state.selection.from,
    state.selection.to,
    (node) => {
      if (node.type === nodeType) {
        const hasAttrs = Object.entries(
          attrs
        ).every(([key, value]) => {
          return (
            node.attrs[key] === value
          );
        });

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
