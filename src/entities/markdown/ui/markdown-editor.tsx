"use client";

import React from "react";
import { ProseMirror, ProseMirrorDoc } from "@handlewithcare/react-prosemirror";
import { useMarkdownEditor, UseMarkdownEditorOptions } from "../hooks/use-markdown-editor";
import { proseMirrorViewPlugins } from "../model/plugins";
import { MarkdownToolbar } from "@/entities/markdown/ui/markdown-toolbar";
import Logo from "@/shared/icons/logo.svg";
import { Link } from "@/shared/i18n/navigation";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { ChevronDown } from "lucide-react";

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
      className="prose outline-0"
    >
      <div className="sticky inset-x-0 top-0 border-b bg-background shadow-xl shadow-background">
        <div className="p-3 border-b mx-auto">
          <div className="max-w-6xl mx-auto px-12 flex items-center justify-between">
            <Link
              href="/"
              className="flex"
            >
              <Logo className="h-8" />
            </Link>
            <button
              type="button"
              className="flex items-center cursor-pointer"
            >
              <Avatar>
                <AvatarFallback>
                  НК
                </AvatarFallback>
              </Avatar>
              <ChevronDown />
            </button>
          </div>
        </div>
        <MarkdownToolbar />
      </div>
      <div className="max-w-2xl mx-auto p-12">
        <ProseMirrorDoc />
      </div>
    </ProseMirror>
  );
}
