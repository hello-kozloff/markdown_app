import React, {
  useCallback,
  useState
} from "react";
import {
  inputRules,
  wrappingInputRule
} from "prosemirror-inputrules";
import {
  ProseMirror,
  ProseMirrorDoc
} from "@handlewithcare/react-prosemirror";
import {
  EditorState,
  Transaction
} from "prosemirror-state";
import { baseKeymap } from "prosemirror-commands";
import { keymap } from "prosemirror-keymap";
import { schema } from "./schema";
import { doc } from "./doc";

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

export function DemoEditor() {
  const [state, setState] = useState(
    editorState
  );

  const dispatch = useCallback(
    function (
      transaction: Transaction
    ) {
      setState((prev) => {
        return prev.apply(transaction);
      });
    },
    []
  );

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
