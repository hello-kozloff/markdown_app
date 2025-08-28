import { keymap } from "prosemirror-keymap";
import { baseKeymap } from "prosemirror-commands";
import { history } from "prosemirror-history";

export const proseMirrorStatePlugins = [
  history()
];

export const proseMirrorViewPlugins = [
  keymap(baseKeymap)
];
