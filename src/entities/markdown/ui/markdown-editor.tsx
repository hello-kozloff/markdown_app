"use client";

import React from "react";
import { ProseMirror, ProseMirrorDoc } from "@handlewithcare/react-prosemirror";
import { useMarkdownEditor, UseMarkdownEditorOptions } from "../hooks/use-markdown-editor";
import { proseMirrorViewPlugins } from "../model/plugins";
import { MarkdownToolbar } from "@/entities/markdown/ui/markdown-toolbar";

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
      <div className="sticky inset-x-0 top-0 border-b bg-background">
        <MarkdownToolbar />
      </div>
      <div className="max-w-2xl mx-auto p-12">
        <ProseMirrorDoc />
      </div>
    </ProseMirror>
  );
}
