import {
  remarkProseMirror,
  toPmMark,
  toPmNode
} from "@handlewithcare/remark-prosemirror";
import {
  Heading,
  Image,
  Link
} from "mdast";
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
        ),
        image: toPmNode(
          schema.nodes.image,
          (node: Image) => ({
            src: node.url,
            alt: node.alt,
            title: node.title
          })
        ),
        blockquote: toPmNode(
          schema.nodes.blockquote
        ),
        inlineCode(node) {
          return schema.text(
            node.value,
            [schema.marks.code.create()]
          );
        },
        thematicBreak: toPmNode(
          schema.nodes.paragraph
        ),
        list(node, state, parent) {
          const listType = node.ordered
            ? schema.nodes.ordered_list
            : schema.nodes.bullet_list;

          return toPmNode(listType)(
            node,
            state,
            parent
          );
        },
        listItem: toPmNode(
          schema.nodes.list_item
        )
      }
    })
    .process(markdown);

  return result.result;
}