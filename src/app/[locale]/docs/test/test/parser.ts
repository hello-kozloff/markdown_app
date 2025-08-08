import {
  remarkProseMirror,
  RemarkProseMirrorOptions,
  toPmMark,
  toPmNode
} from "@handlewithcare/remark-prosemirror";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { content } from "./content";
import { schema } from "./schema";
import {
  Heading,
  Image,
  Link
} from "mdast";

const remarkProseMirrorOptions: RemarkProseMirrorOptions =
  {
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
        return schema.text(node.value, [
          schema.marks.code.create()
        ]);
      },
      thematicBreak: toPmNode(
        schema.nodes.paragraph
      )
    }
  };

export const doc = await unified()
  .use(remarkParse)
  .use(
    remarkProseMirror,
    remarkProseMirrorOptions
  )
  .process(content)
  .then(({ result }) => result);
