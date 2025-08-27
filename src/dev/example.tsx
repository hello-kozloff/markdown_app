import { Markdown } from "@/dev/markdown";
import { Undo } from "@/dev/features/undo";
import { Redo } from "@/dev/features/redo";
import { Heading } from "@/dev/features/heading";

export function Example() {
  return (
    <Markdown
      name="example"
      toolbar={[
        [Undo, Redo],
        [Heading]
      ]}
      readonly
      disabled
    />
  );
}
