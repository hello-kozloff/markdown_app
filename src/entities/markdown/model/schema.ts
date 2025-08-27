import { Schema } from "prosemirror-model";

export const schema = new Schema({
  nodes: {
    doc: { content: "block+" },

    paragraph: {
      group: "block",
      content: "inline*",
      attrs: {
        align: { default: "left" }
      },
      toDOM(node) {
        const { align } = node.attrs;
        return [
          "p",
          {
            style: `text-align: ${align}`
          },
          0
        ];
      },
      parseDOM: [
        {
          tag: "p",
          getAttrs: (dom) => ({
            align:
              (dom as HTMLElement).style
                .textAlign || "left"
          })
        }
      ]
    },

    heading: {
      group: "block",
      content: "inline*",
      attrs: {
        level: { default: 1 },
        align: { default: "left" }
      },
      toDOM(node) {
        const { level, align } =
          node.attrs;
        return [
          `h${level}`,
          {
            style: `text-align: ${align}`
          },
          0
        ];
      },
      parseDOM: [1, 2, 3, 4, 5, 6].map(
        (lvl) => ({
          tag: `h${lvl}`,
          getAttrs: (dom) => ({
            level: lvl,
            align:
              (dom as HTMLElement).style
                .textAlign || "left"
          })
        })
      )
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
      attrs: {
        align: { default: "left" }
      },
      toDOM(node) {
        return [
          "blockquote",
          {
            style: `text-align: ${node.attrs.align}`
          },
          0
        ];
      },
      parseDOM: [
        {
          tag: "blockquote",
          getAttrs: (dom) => ({
            align:
              (dom as HTMLElement).style
                .textAlign || "left"
          })
        }
      ]
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
