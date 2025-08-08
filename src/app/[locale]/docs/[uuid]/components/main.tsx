"use client";

import {
  baseKeymap,
  toggleMark
} from "prosemirror-commands";
import { gapCursor } from "prosemirror-gapcursor";
import "prosemirror-gapcursor/style/gapcursor.css";
import {
  history,
  redo,
  undo
} from "prosemirror-history";
import {
  inputRules,
  wrappingInputRule
} from "prosemirror-inputrules";
import { keymap } from "prosemirror-keymap";
import {
  EditorState,
  Transaction
} from "prosemirror-state";
import {
  columnResizing,
  tableEditing
} from "prosemirror-tables";
import "prosemirror-tables/style/tables.css";
import "prosemirror-view/style/prosemirror.css";
import React, {
  useCallback,
  useState
} from "react";
import { LinkTooltip } from "./LinkTooltip";
import Menu from "./Menu";
import { doc } from "./doc";
import { CodeBlock } from "./nodeViews/CodeBlock";
import { schema } from "./schema";
import {
  ProseMirror,
  ProseMirrorDoc,
  reactKeys
} from "@handlewithcare/react-prosemirror";

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
    }),
    columnResizing(),
    tableEditing(),
    history(),
    reactKeys()
  ]
});

const plugins = [
  keymap({
    ...baseKeymap,
    "Mod-i": toggleMark(
      schema.marks.em
    ),
    "Mod-b": toggleMark(
      schema.marks.strong
    ),
    "Mod-Shift-c": toggleMark(
      schema.marks.code
    ),
    "Mod-z": undo,
    "Mod-Shift-z": redo,
    "Mod-y": redo
  }),
  gapCursor()
];

const nodeViews = {
  code_block: CodeBlock
};

export function DemoEditor() {
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
    <main className="prose">
      <ProseMirror
        className="ProseMirror"
        state={state}
        dispatchTransaction={
          dispatchTransaction
        }
        nodeViews={nodeViews}
        plugins={plugins}
      >
        <Menu />
        <ProseMirrorDoc
          spellCheck={false}
        />
        <LinkTooltip />
      </ProseMirror>
    </main>
  );
}
