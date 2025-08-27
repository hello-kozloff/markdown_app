import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { useCallback } from "react";
import {
  isMarkActive,
  isNodeActive
} from "@/shared/lib/utils";
import {
  lift,
  setBlockType,
  wrapIn
} from "prosemirror-commands";
import {
  Attrs,
  NodeType
} from "prosemirror-model";

export function useMarkdown() {
  const state = useEditorState();

  const _getNodeType =
    useEditorEventCallback(
      (view, node: string) => {
        const nodeType =
          view.state.schema.nodes[node];

        if (!nodeType) {
          throw new Error(
            `Node '${nodeType}' not found in state schema!`
          );
        }

        return nodeType;
      }
    );

  const _isMarkActive = useCallback(
    (mark: string) =>
      isMarkActive(
        state,
        state.schema.marks[mark]
      ),
    [state]
  );

  const _isNodeActive = useCallback(
    (node: string, attrs: Attrs = {}) =>
      isNodeActive(state, node, attrs),
    [state]
  );

  const _setBlockType =
    useEditorEventCallback(
      (
        view,
        nodeType: NodeType,
        attrs: Attrs = {}
      ) =>
        setBlockType(nodeType, attrs)(
          view.state,
          view.dispatch
        )
    );

  const _wrapIn =
    useEditorEventCallback(
      (
        view,
        nodeType: NodeType,
        attrs: Attrs = {}
      ) =>
        wrapIn(nodeType, attrs)(
          view.state,
          view.dispatch
        )
    );

  const _lift = useEditorEventCallback(
    (view) =>
      lift(view.state, view.dispatch)
  );

  return {
    getNodeType: _getNodeType,
    isMarkActive: _isMarkActive,
    isNodeActive: _isNodeActive,
    setBlockType: _setBlockType,
    wrapIn: _wrapIn,
    lift: _lift
  };
}
