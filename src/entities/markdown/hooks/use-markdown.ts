import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { useCallback } from "react";
import {
  isMarkActive,
  isNodeActive,
  setTextAlign
} from "@/shared/lib/utils";
import {
  lift,
  setBlockType,
  toggleMark,
  wrapIn
} from "prosemirror-commands";
import {
  Attrs,
  MarkType,
  NodeType
} from "prosemirror-model";

export function useMarkdown() {
  const state = useEditorState();

  const _getNodeType = useCallback(
    (node: string) => {
      const nodeType =
        state.schema.nodes[node];

      if (!nodeType) {
        throw new Error(
          `Node '${nodeType}' not found in state schema!`
        );
      }

      return nodeType;
    },
    [state.schema.nodes]
  );

  const _getMarkType = useCallback(
    (mark: string) => {
      const markType =
        state.schema.marks[mark];

      if (!markType) {
        throw new Error(
          `Mark '${markType}' not found in state schema!`
        );
      }

      return markType;
    },
    [state.schema.marks]
  );

  const _isMarkActive = useCallback(
    (markType: MarkType) =>
      isMarkActive(state, markType),
    [state]
  );

  const _isNodeActive = useCallback(
    (
      nodeType: NodeType,
      attrs: Attrs = {}
    ) =>
      isNodeActive(
        state,
        nodeType,
        attrs
      ),
    [state]
  );

  const _toggleMark =
    useEditorEventCallback(
      (
        view,
        markType: MarkType,
        attrs: Attrs = {}
      ) =>
        toggleMark(markType, attrs)(
          view.state,
          view.dispatch,
          view
        )
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

  const _setTextAlign =
    useEditorEventCallback(
      (
        view,
        align:
          | "left"
          | "center"
          | "right"
          | "justify" = "left"
      ) =>
        setTextAlign(align)(
          view.state,
          view.dispatch
        )
    );

  return {
    getNodeType: _getNodeType,
    getMarkType: _getMarkType,
    isMarkActive: _isMarkActive,
    isNodeActive: _isNodeActive,
    toggleMark: _toggleMark,
    setBlockType: _setBlockType,
    wrapIn: _wrapIn,
    lift: _lift,
    setTextAlign: _setTextAlign
  };
}
