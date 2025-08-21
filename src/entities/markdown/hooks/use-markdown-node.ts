import { useCallback } from "react";
import { useEditorState } from "@handlewithcare/react-prosemirror";
import { isNodeActive } from "@/shared/lib/utils";

export function useMarkdownNode() {
  const state = useEditorState();

  const isActive = useCallback(
    (
      node: string,
      attrs: Record<string, string>
    ) => {
      return isNodeActive(
        state,
        node,
        attrs
      );
    },
    [state]
  );

  return { isActive };
}
