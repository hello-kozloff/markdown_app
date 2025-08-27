"use client";

import { PropsWithChildren } from "react";
import { ProseMirror } from "@handlewithcare/react-prosemirror";
import { proseMirrorViewPlugins } from "../model/plugins";
import {
  useMarkdownContext,
  UseMarkdownContextOptions
} from "@/entities/markdown";

export type MarkdownContextProps =
  PropsWithChildren<
    Pick<
      UseMarkdownContextOptions,
      "data"
    >
  >;

export function MarkdownContext({
  data,
  children
}: MarkdownContextProps) {
  const {
    editorState,
    dispatchTransaction
  } = useMarkdownContext({
    data
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
