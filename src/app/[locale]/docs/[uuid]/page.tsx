import { Markdown } from "@/widgets/markdown";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Blockquote,
  Bold,
  CodeBlock,
  CodeInline,
  Heading,
  Highlight,
  Image,
  Italic,
  Link,
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

export default function DocumentPage() {
  return (
    <Markdown
      name="example"
      data={data}
      toolbar={[
        [Undo, Redo],
        [
          Heading,
          List,
          Blockquote,
          CodeBlock,
          Image
        ],
        [
          Bold,
          Italic,
          Underline,
          Strike,
          CodeInline,
          Highlight,
          Link
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
  );
}
