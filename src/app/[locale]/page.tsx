import { Markdown } from "@/widgets/markdown";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Blockquote,
  Bold,
  Heading,
  Highlight,
  Italic,
  List,
  Redo,
  Strike,
  Underline,
  Undo
} from "@/features/markdown/toolbar";

const data = `
  
  # Getting started
  
  Welcome to the *Simple Editor* template! This template integrates open source UI components and Tiptap extensions licensed under MIT.

`;

export default function RootPage() {
  return (
    <div className="h-svh flex flex-col overflow-hidden">
      <Markdown
        name="example"
        data={data}
        toolbar={[
          [Undo, Redo],
          [Heading, List, Blockquote],
          [
            Bold,
            Italic,
            Underline,
            Strike,
            Highlight
          ],
          [
            AlignLeft,
            AlignCenter,
            AlignRight,
            AlignJustify
          ]
        ]}
        readonly
        disabled
      />
    </div>
  );
}
