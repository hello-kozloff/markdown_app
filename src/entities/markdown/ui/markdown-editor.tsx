import React, { useCallback, useEffect, useState } from "react";
import { ProseMirror, ProseMirrorDoc } from "@handlewithcare/react-prosemirror";
import { EditorState, Transaction } from "prosemirror-state";
import { proseMirrorStatePlugins, proseMirrorViewPlugins } from "../model/plugins";
import { schema } from "../model/schema";
import { parseMarkdownToProseMirrorDoc } from "../model/parser";

export interface MarkdownEditorProps {
  initialMarkdown: string;
}

export function MarkdownEditor({
  initialMarkdown
}: MarkdownEditorProps) {
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
