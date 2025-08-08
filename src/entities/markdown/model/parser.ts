import {
  remarkProseMirror,
  toPmMark,
  toPmNode
} from "@handlewithcare/remark-prosemirror";
import { Heading, Link } from "mdast";
import remarkParse from "remark-parse";
import { unified } from "unified";
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
        ),
        strong: toPmMark(
          schema.marks.strong
        ),
        emphasis: toPmMark(
          schema.marks.em
        ),
        link: toPmMark(
          schema.marks.link,
          (node: Link) => ({
            url: node.url
          })
        )
      }
    })
    .process(markdown);

  return result.result;
}
