"use client";

import React from "react";
import {
  ProseMirror,
  ProseMirrorDoc
} from "@handlewithcare/react-prosemirror";
import {
  useMarkdownEditor,
  UseMarkdownEditorOptions
} from "../hooks/use-markdown-editor";
import { proseMirrorViewPlugins } from "../model/plugins";

export type MarkdownEditorProps = Pick<
  UseMarkdownEditorOptions,
  "initialMarkdown"
>;

export function MarkdownEditor({
  initialMarkdown
}: MarkdownEditorProps) {
  const {
    editorState,
    dispatchTransaction
  } = useMarkdownEditor({
    initialMarkdown
  });

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
