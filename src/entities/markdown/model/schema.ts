import { Schema } from "prosemirror-model";

export const schema = new Schema({
  nodes: {
    doc: { content: "block+" },
    paragraph: {
      group: "block",
      content: "inline*",
      toDOM() {
        return ["p", 0];
      }
    },
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
    image: {
      inline: true,
      group: "inline",
      draggable: true,
      attrs: {
        src: { default: "" },
        alt: { default: "" },
        title: { default: "" }
      },
      toDOM(node) {
        return [
          "img",
          {
            src: node.attrs.src,
            alt: node.attrs.alt,
            title: node.attrs.title
          }
        ];
      }
    },
    blockquote: {
      content: "block+",
      group: "block",
      defining: true,
      toDOM() {
        return ["blockquote", 0];
      },
      parseDOM: [{ tag: "blockquote" }]
    },
    list: {
      group: "block",
      content: "list_item+",
      toDOM() {
        return [
          "ol",
          { class: "list-decimal" },
          0
        ];
      }
    },
    list_item: {
      content: "paragraph+",
      toDOM() {
        return ["li", 0];
      }
    },
    text: { group: "inline" }
  },
  marks: {
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
    underline: {
      toDOM() {
        return ["u", 0];
      },
      parseDOM: [{ tag: "u" }]
    },
    code: {
      toDOM() {
        return ["code"];
      },
      parseDOM: [
        {
          tag: "code"
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
