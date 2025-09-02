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
  
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad beatae eaque facilis harum id iusto qui?

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
