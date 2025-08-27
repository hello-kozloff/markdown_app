import {
  type ClassValue,
  clsx
} from "clsx";
import { twMerge } from "tailwind-merge";
import {
  MarkType,
  NodeType
} from "prosemirror-model";
import {
  EditorState,
  Transaction
} from "prosemirror-state";

export function cn(
  ...inputs: ClassValue[]
) {
  return twMerge(clsx(inputs));
}

export function isMarkActive(
  state: EditorState,
  markType: MarkType
) {
  return state.selection.empty
    ? !!markType.isInSet(
        state.storedMarks ||
          state.selection.$from.marks()
      )
    : state.doc.rangeHasMark(
        state.selection.from,
        state.selection.to,
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

export function setTextAlign(
  align:
    | "left"
    | "center"
    | "right"
    | "justify"
) {
  return (
    state: EditorState,
    dispatch?: (tr: Transaction) => void
  ) => {
    const { $from, $to } =
      state.selection;

    let applicable = false;

    state.doc.nodesBetween(
      $from.pos,
      $to.pos,
      (node, pos) => {
        if (
          node.isTextblock &&
          node.type.spec.attrs?.align
        ) {
          applicable = true;
          if (dispatch) {
            const attrs = {
              ...node.attrs,
              align
            };
            const tr =
              state.tr.setNodeMarkup(
                pos,
                node.type,
                attrs,
                node.marks
              );
            dispatch(
              tr.scrollIntoView()
            );
          }
          return false;
        }
      }
    );

    return applicable;
  };
}

export function generateKey(
  name: string,
  baseName: string,
  index: number
) {
  return `${baseName}-${name}-${index}`;
}
