"use client";

import {
  ProseMirror,
  ProseMirrorDoc
} from "@handlewithcare/react-prosemirror";
import {
  useMarkdown,
  UseMarkdownOptions
} from "../hooks/use-markdown";
import { proseMirrorViewPlugins } from "../model/plugins";

export type MarkdownEditorProps = Pick<
  UseMarkdownOptions,
  "initialMarkdown"
>;

export function MarkdownContent({
  initialMarkdown
}: MarkdownEditorProps) {
  const {
    editorState,
    dispatchTransaction
  } = useMarkdown({
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
      className="prose outline-0"
    >
      <div className="max-w-2xl mx-auto p-12">
        <ProseMirrorDoc />
      </div>
    </ProseMirror>
  );
}
