import remarkParse from "remark-parse";
import { unified } from "unified";
import { Heading } from "mdast";
import { schema } from "./schema";
import { remarkProseMirror, toPmMark, toPmNode } from "@handlewithcare/remark-prosemirror";

export async function parseMarkdownToProseMirrorDoc(
  markdown: string
) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkProseMirror, {
      schema,
      handlers: {
        heading: toPmNode(
          schema.nodes.heading,
          (node: Heading) => ({
            level: node.depth
          })
        ),
        paragraph: toPmNode(
          schema.nodes.paragraph
        ),
        strong: toPmMark(
          schema.marks.strong
        ),
        emphasis: toPmMark(
          schema.marks.em
        )
      }
    })
    .process(markdown);

  return result.result;
}
