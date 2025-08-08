import { remarkProseMirror, toPmNode } from "@handlewithcare/remark-prosemirror";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Heading } from "mdast";
import { schema } from "./schema";

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
        )
      }
    })
    .process(markdown);

  return result.result;
}
