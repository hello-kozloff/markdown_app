import { keymap } from "prosemirror-keymap";
import { baseKeymap } from "prosemirror-commands";
import { history } from "prosemirror-history";
import { schema } from "./schema";
import { buildKeyMap } from "./keymap";

export const proseMirrorStatePlugins = [
  history()
];

export const proseMirrorViewPlugins = [
  keymap(buildKeyMap(schema)),
  keymap(baseKeymap)
];
