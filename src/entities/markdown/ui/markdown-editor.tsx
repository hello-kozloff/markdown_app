import React, {
  useCallback,
  useEffect,
  useState
} from "react";
import {
  ProseMirror,
  ProseMirrorDoc
} from "@handlewithcare/react-prosemirror";
import {
  EditorState,
  Transaction
} from "prosemirror-state";
import {
  proseMirrorStatePlugins,
  proseMirrorViewPlugins
} from "../model/plugins";
import { schema } from "../model/schema";
import { parseMarkdownToProseMirrorDoc } from "../model/parser";

export interface MarkdownEditorProps {
  markdown: string;
}

export function MarkdownEditor({
  markdown
}: MarkdownEditorProps) {
  const [editorState, setEditorState] =
    useState<EditorState | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function setup() {
      const doc =
        await parseMarkdownToProseMirrorDoc(
          markdown
        );

      if (cancelled) return;

      const state = EditorState.create({
        schema,
        doc,
        plugins: proseMirrorStatePlugins
      });

      setEditorState(state);
    }

    setup();

    return () => {
      cancelled = true;
    };
  }, [markdown]);

  const dispatchTransaction =
    useCallback(
      (transaction: Transaction) => {
        if (!editorState) return;

        const newState =
          editorState.apply(
            transaction
          );

        setEditorState(newState);
      },
      [editorState]
    );

  if (!editorState) {
    return (
      <div>Загрузка редактора...</div>
    );
  }

  return (
    <ProseMirror
      state={editorState}
      dispatchTransaction={
        dispatchTransaction
      }
      plugins={proseMirrorViewPlugins}
      className="prose"
    >
      <ProseMirrorDoc />
    </ProseMirror>
  );
}
