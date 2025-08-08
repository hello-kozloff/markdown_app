import {
  remarkProseMirror,
  RemarkProseMirrorOptions,
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
      heading: toPmNode(
        schema.nodes.heading,
        (node) => ({
          level: node.depth
        })
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
