import { Markdown } from "@/dev/markdown";
import { Undo } from "@/dev/features/undo";
import { Redo } from "@/dev/features/redo";
import { Heading } from "@/dev/features/heading";

const data = `
  
  # Getting started
  
  Welcome to the *Simple Editor* template! This template integrates open source UI components and Tiptap extensions licensed under MIT.

`;

export function Example() {
  return (
    <Markdown
      name="example"
      data={data}
      toolbar={[
        [Undo, Redo],
        [Heading]
      ]}
      readonly
      disabled
    />
  );
}
