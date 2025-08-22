import { Schema } from "prosemirror-model";

export const schema = new Schema({
  nodes: {
    doc: { content: "block+" },

    paragraph: {
      group: "block",
      content: "inline*",
      toDOM() {
        return ["p", 0];
      },
      parseDOM: [{ tag: "p" }]
    },

    heading: {
      group: "block",
      content: "inline*",
      attrs: { level: { default: 1 } },
      toDOM(node) {
        return [
          `h${node.attrs.level}`,
          0
        ];
      },
      parseDOM: [
        {
          tag: "h1",
          getAttrs: () => ({ level: 1 })
        },
        {
          tag: "h2",
          getAttrs: () => ({ level: 2 })
        },
        {
          tag: "h3",
          getAttrs: () => ({ level: 3 })
        },
        {
          tag: "h4",
          getAttrs: () => ({ level: 4 })
        },
        {
          tag: "h5",
          getAttrs: () => ({ level: 5 })
        },
        {
          tag: "h6",
          getAttrs: () => ({ level: 6 })
        }
      ]
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
          getAttrs: (dom) => {
            const el =
              dom as HTMLImageElement;
            return {
              src:
                el.getAttribute(
                  "src"
                ) ?? "",
              alt:
                el.getAttribute(
                  "alt"
                ) ?? "",
              title:
                el.getAttribute(
                  "title"
                ) ?? ""
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
    },

    ordered_list: {
      group: "block",
      content: "list_item+",
      toDOM() {
        return [
          "ol",
          { class: "list-decimal" },
          0
        ];
      },
      parseDOM: [{ tag: "ol" }]
    },

    bullet_list: {
      group: "block",
      content: "list_item+",
      toDOM() {
        return [
          "ul",
          { class: "list-disc" },
          0
        ];
      },
      parseDOM: [{ tag: "ul" }]
    },

    list_item: {
      content: "paragraph+",
      toDOM() {
        return ["li", 0];
      },
      parseDOM: [{ tag: "li" }]
    },

    text: { group: "inline" }
  },

  marks: {
    em: {
      toDOM() {
        return ["em", 0];
      },
      parseDOM: [
        { tag: "em" },
        { tag: "i" },
        { style: "font-style=italic" }
      ]
    },

    strong: {
      toDOM() {
        return ["strong", 0];
      },
      parseDOM: [
        { tag: "strong" },
        { tag: "b" },
        { style: "font-weight=bold" }
      ]
    },

    underline: {
      toDOM() {
        return ["u", 0];
      },
      parseDOM: [
        { tag: "u" },
        {
          style:
            "text-decoration=underline"
        }
      ]
    },

    strike: {
      toDOM() {
        return ["s", 0];
      },
      parseDOM: [
        { tag: "s" },
        { tag: "del" },
        {
          style:
            "text-decoration=line-through"
        }
      ]
    },

    code: {
      toDOM() {
        return ["code", 0];
      },
      parseDOM: [{ tag: "code" }]
    },

    highlight: {
      toDOM() {
        return [
          "span",
          {
            class: "markdown-highlight"
          },
          0
        ];
      },
      parseDOM: [
        {
          tag: "span.markdown-highlight"
        }
      ]
    },

    link: {
      attrs: {
        href: { default: "" },
        title: { default: null }
      },
      inclusive: false,
      toDOM(mark) {
        return [
          "a",
          {
            href: mark.attrs.href,
            title: mark.attrs.title
          },
          0
        ];
      },
      parseDOM: [
        {
          tag: "a[href]",
          getAttrs(dom) {
            const el =
              dom as HTMLAnchorElement;
            return {
              href: el.getAttribute(
                "href"
              ),
              title:
                el.getAttribute("title")
            };
          }
        }
      ]
    }
  }
});
