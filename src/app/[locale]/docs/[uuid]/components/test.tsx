import React, { useCallback, useEffect, useState } from "react";
import { inputRules, wrappingInputRule } from "prosemirror-inputrules";
import { ProseMirror, ProseMirrorDoc } from "@handlewithcare/react-prosemirror";
import { EditorState, Transaction } from "prosemirror-state";
import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import { schema } from "./schema";
import type { Heading } from "mdast";
import { unified } from "unified";
import remarkParse from "remark-parse";
import { remarkProseMirror, toPmNode } from "@handlewithcare/remark-prosemirror";

type MarkdownEditorProps = {
  markdown: string;
};

async function parseMarkdownToProseMirrorDoc(
  markdown: string
) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkProseMirror, {
      schema,
      handlers: {
        heading: toPmNode(
          schema.nodes.heading,
          (node: Heading) => ({
            level: node.depth
          })
        )
      }
    })
    .process(markdown);

  return result.result;
}

const proseMirrorStatePlugins = [
  inputRules({
    rules: [
      wrappingInputRule(
        /^\s*([-+*])\s$/,
        schema.nodes.list
      )
    ]
  })
];

const proseMirrorViewPlugins = [
  keymap(baseKeymap)
];

export function MarkdownEditor({
  markdown
}: MarkdownEditorProps) {
  const [editorState, setEditorState] =
    useState<EditorState | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function setupEditorState() {
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

    setupEditorState();

    return () => {
      cancelled = true;
    };
  }, [markdown]);

  const handleTransaction = useCallback(
    (transaction: Transaction) => {
      if (!editorState) return;
      const newState =
        editorState.apply(transaction);
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
    <main className="prose">
      <ProseMirror
        state={editorState}
        dispatchTransaction={
          handleTransaction
        }
        plugins={proseMirrorViewPlugins}
      >
        <ProseMirrorDoc />
      </ProseMirror>
    </main>
  );
}
