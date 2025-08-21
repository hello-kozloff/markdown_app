"use client";

import { PropsWithChildren } from "react";
import { ProseMirror } from "@handlewithcare/react-prosemirror";
import { proseMirrorViewPlugins } from "../model/plugins";
import {
  useMarkdown,
  UseMarkdownOptions
} from "@/entities/markdown";

export type MarkdownContextProps =
  PropsWithChildren<
    Pick<
      UseMarkdownOptions,
      "initialMarkdown"
    >
  >;

export function MarkdownContext({
  initialMarkdown,
  children
}: MarkdownContextProps) {
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
      className="outline-0"
    >
      {children}
    </ProseMirror>
  );
}