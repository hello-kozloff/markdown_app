import {
  useCallback,
  useEffect,
  useState
} from "react";
import {
  EditorState,
  Transaction
} from "prosemirror-state";
import { proseMirrorStatePlugins } from "../model/plugins";
import { parseMarkdownToProseMirrorDoc } from "../model/parser";
import { schema } from "../model/schema";

export interface UseMarkdownOptions {
  initialMarkdown: string;
}

export function useMarkdown({
  initialMarkdown
}: UseMarkdownOptions) {
  const [editorState, setEditorState] =
    useState<EditorState | null>(null);

  useEffect(() => {
    (async () => {
      const doc =
        await parseMarkdownToProseMirrorDoc(
          initialMarkdown
        );

      setEditorState(
        EditorState.create({
          schema,
          doc,
          plugins:
            proseMirrorStatePlugins
        })
      );
    })();
  }, [initialMarkdown]);

  const dispatchTransaction =
    useCallback(
      (transaction: Transaction) => {
        if (!editorState) return;
        setEditorState(
          editorState.apply(transaction)
        );
      },
      [editorState]
    );

  return {
    editorState,
    dispatchTransaction
  };
}
