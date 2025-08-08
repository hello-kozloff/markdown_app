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

const remarkProseMirrorOptions: RemarkProseMirrorOptions =
  {
    schema,
    handlers: {
      paragraph: toPmNode(
        schema.nodes.paragraph
      ),
      heading: toPmNode(
        schema.nodes.heading,
        (node) => ({
          level: node.depth
        })
      ),
      code(node) {
        return schema.nodes.code_block.create(
          {},
          schema.text(node.value)
        );
      },
      image: toPmNode(
        schema.nodes.image,
        (node) => ({
          url: node.url
        })
      ),
      emphasis: toPmMark(
        schema.marks.em
      ),
      strong: toPmMark(
        schema.marks.strong
      ),
      inlineCode(node) {
        return schema.text(node.value, [
          schema.marks.code.create()
        ]);
      },
      link: toPmMark(
        schema.marks.link,
        (node) => ({
          url: node.url
        })
      ),
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
