import { useCallback } from "react";
import { useEditorState } from "@handlewithcare/react-prosemirror";
import { isNodeActive } from "@/shared/lib/utils";

export interface UseMarkdownNodeOptions {
  node: string;
}

export function useMarkdownNode({
  node
}: UseMarkdownNodeOptions) {
  const state = useEditorState();

  const isActive = useCallback(
    (attrs: Record<string, string>) => {
      return isNodeActive(
        state,
        node,
        attrs
      );
    },
    [node, state]
  );

  return { isActive };
}
