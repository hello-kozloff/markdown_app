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
      group: "block",
      attrs: {
        url: {
          default: "",
          validate: "string"
        }
      },
      toDOM(node) {
        return [
          "div",
          [
            "img",
            {
              src: node.attrs.url
            }
          ]
        ];
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
    code: {
      toDOM() {
        return [
          "code",
          {
            style:
              "background-color: lightgray; padding: 0.125rem 0.25rem; border-radius: 2px;"
          },
          0
        ];
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
