import { Schema } from "prosemirror-model";

export const schema = new Schema({
  nodes: {
    doc: { content: "block+" },
    text: { group: "inline" },
    heading: {
      group: "block",
      content: "inline*",
      attrs: {
        level: {
          default: 1,
          validate: "number"
        }
      },
      toDOM(node) {
        return [
          `h${node.attrs.level}`,
          0
        ];
      }
    },
    paragraph: {
      group: "block",
      content: "inline*",
      toDOM() {
        return ["p", 0];
      }
    }
  },
  marks: {
    strong: {
      toDOM() {
        return ["strong"];
      },
      parseDOM: [
        {
          tag: "strong"
        }
      ]
    },
    em: {
      toDOM() {
        return ["em"];
      },
      parseDOM: [
        {
          tag: "em"
        }
      ]
    },
    link: {
      attrs: {
        url: {
          default: "",
          validate: "string"
        }
      },
      toDOM(mark) {
        return [
          "a",
          { href: mark.attrs.url }
        ];
      },
      parseDOM: [
        {
          tag: "a",
          getAttrs(node) {
            return {
              url: (
                node as HTMLAnchorElement
              ).href
            };
          }
        }
      ]
    }
  }
});
