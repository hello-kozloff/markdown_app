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

type DemoEditorProps = {
  content: string;
};

export function DemoEditor({
  content
}: DemoEditorProps) {
  const [state, setState] =
    useState<EditorState | null>(null);

  async function parseContent(
    md: string
  ) {
    return await unified()
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
      .process(md)
      .then(({ result }) => result);
  }

  useEffect(() => {
    parseContent(content).then(
      (doc) => {
        const newState =
          EditorState.create({
            schema,
            doc,
            plugins: [
              inputRules({
                rules: [
                  wrappingInputRule(
                    /^\s*([-+*])\s$/,
                    schema.nodes.list
                  )
                ]
              })
            ]
          });
        setState(newState);
      }
    );
  }, [content]);

  const dispatch = useCallback(
    (transaction: Transaction) => {
      if (!state) return;
      const newState = state.apply(
        transaction
      );
      setState(newState);
    },
    [state]
  );

  if (!state) {
    return (
      <div>Загрузка редактора...</div>
    );
  }

  return (
    <main className="prose">
      <ProseMirror
        state={state}
        dispatchTransaction={dispatch}
        plugins={[keymap(baseKeymap)]}
      >
        <ProseMirrorDoc />
      </ProseMirror>
    </main>
  );
}
