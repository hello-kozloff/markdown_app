import { useEditorEventCallback, useEditorState } from "@handlewithcare/react-prosemirror";
import { useCallback } from "react";
import { isMarkActive, isNodeActive } from "@/shared/lib/utils";
import { lift, setBlockType, wrapIn } from "prosemirror-commands";

export function useMarkdown() {
  const state = useEditorState();

  const _isMarkActive = useCallback(
    (mark: string) =>
      isMarkActive(
        state,
        state.schema.marks[mark]
      ),
    [state]
  );

  const _isNodeActive = useCallback(
    (
      node: string,
      attrs?: Record<
        string,
        string | number
      >
    ) =>
      isNodeActive(state, node, attrs),
    [state]
  );

  const _setBlockType =
    useEditorEventCallback(
      (
        view,
        node: string,
        attrs?: Record<
          string,
          string | number
        >
      ) => {
        const type =
          view.state.schema.nodes[node];

        if (!type) {
          throw new Error(
            `Node found node '${node}' in markdown state scheme!`
          );
        }

        if (
          _isNodeActive(node, attrs)
        ) {
          if (type.isTextblock) {
            return setBlockType(
              view.state.schema.nodes[
                "paragraph"
              ]
            )(
              view.state,
              view.dispatch
            );
          }

          return lift(
            view.state,
            view.dispatch
          );
        }

        if (type.isTextblock) {
          return setBlockType(
            type,
            attrs
          )(view.state, view.dispatch);
        }

        return wrapIn(type)(
          view.state,
          view.dispatch
        );
      }
    );

  return {
    isMarkActive: _isMarkActive,
    isNodeActive: _isNodeActive,
    setBlockType: _setBlockType
  };
}
