"use client";

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
  data: string;
}

export function useMarkdown({
  data
}: UseMarkdownOptions) {
  const [editorState, setEditorState] =
    useState<EditorState | null>(null);

  useEffect(() => {
    (async () => {
      const doc =
        await parseMarkdownToProseMirrorDoc(
          data
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
  }, [data]);

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