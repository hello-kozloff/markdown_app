import {
  inputRules,
  wrappingInputRule
} from "prosemirror-inputrules";
import { keymap } from "prosemirror-keymap";
import { baseKeymap } from "prosemirror-commands";
import { schema } from "./schema";

export const proseMirrorStatePlugins = [
  inputRules({
    rules: [
      wrappingInputRule(
        /^\s*([-+*])\s$/,
        schema.nodes.list
      )
    ]
  })
];

export const proseMirrorViewPlugins = [
  keymap(baseKeymap)
];
