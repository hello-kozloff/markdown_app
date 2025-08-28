"use client";

import {
  PropsWithChildren,
  ReactNode
} from "react";
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
    > & {
      skeleton: ReactNode;
    }
  >;

export function MarkdownContext({
  data,
  skeleton,
  children
}: MarkdownContextProps) {
  const {
    editorState,
    dispatchTransaction
  } = useMarkdownContext({
    data
  });

  if (!editorState) {
    return skeleton;
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
