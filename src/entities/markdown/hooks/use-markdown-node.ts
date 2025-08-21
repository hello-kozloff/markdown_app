import { useCallback } from "react";
import {
  useEditorEventCallback,
  useEditorState
} from "@handlewithcare/react-prosemirror";
import { isNodeActive } from "@/shared/lib/utils";
import { setBlockType } from "prosemirror-commands";

export interface UseMarkdownNodeOptions {
  node: string;
}

export function useMarkdownNode({
  node
}: UseMarkdownNodeOptions) {
  const state = useEditorState();

  const isActive = useCallback(
    (
      attrs?: Record<
        string,
        string | number
      >
    ) =>
      isNodeActive(state, node, attrs),
    [node, state]
  );

  const set = useEditorEventCallback(
    (
      view,
      attrs?: Record<
        string,
        string | number
      >
    ) =>
      setBlockType(
        view.state.schema.nodes[node],
        attrs
      )(view.state, view.dispatch)
  );

  return { isActive, set };
}