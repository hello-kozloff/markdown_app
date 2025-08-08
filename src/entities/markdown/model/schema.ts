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
      },
      parseDOM: [
        {
          tag: "img[src]",
          getAttrs(dom) {
            const el =
              dom as HTMLImageElement;
            return {
              src: el.getAttribute(
                "src"
              ),
              alt: el.getAttribute(
                "alt"
              ),
              title:
                el.getAttribute("title")
            };
          }
        }
      ]
    },
    blockquote: {
      content: "block+",
      group: "block",
      defining: true,
      toDOM() {
        return ["blockquote", 0];
      },
      parseDOM: [{ tag: "blockquote" }]
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
    }
  }
});
