"use client";

import { baseKeymap } from "prosemirror-commands";
import { inputRules, wrappingInputRule } from "prosemirror-inputrules";
import { keymap } from "prosemirror-keymap";
import { EditorState, Transaction } from "prosemirror-state";
import React, { useCallback, useState } from "react";
import { doc } from "./parser";
import { schema } from "./schema";
import { ProseMirror, ProseMirrorDoc } from "@handlewithcare/react-prosemirror";

const editorState = EditorState.create({
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

const plugins = [keymap(baseKeymap)];

export function MarkdownEditor() {
  const [state, setState] = useState(
    editorState
  );

  const dispatchTransaction =
    useCallback(function (
      tr: Transaction
    ) {
      setState((prev) => {
        return prev.apply(tr);
      });
    }, []);

  return (
    <main>
      <ProseMirror
        state={state}
        dispatchTransaction={
          dispatchTransaction
        }
        plugins={plugins}
      >
        <ProseMirrorDoc
          spellCheck={false}
        />
      </ProseMirror>
    </main>
  );
}
