import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  CodeXmlIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  HeadingIcon,
  HighlighterIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrdered,
  ListTodo,
  MessageSquareCodeIcon,
  Redo2Icon,
  StrikethroughIcon,
  TextQuoteIcon,
  UnderlineIcon,
  Undo2Icon
} from "lucide-react";

export const tools = {
  undo: {
    name: "undo",
    icon: Undo2Icon
  },
  redo: {
    name: "redo",
    icon: Redo2Icon
  },
  heading: {
    name: "heading",
    icon: HeadingIcon,
    children: [
      {
        name: "heading-1",
        icon: Heading1Icon,
        attrs: {
          level: 1
        }
      },
      {
        name: "heading-2",
        icon: Heading2Icon,
        attrs: {
          level: 2
        }
      },
      {
        name: "heading-3",
        icon: Heading3Icon,
        attrs: {
          level: 3
        }
      },
      {
        name: "heading-4",
        icon: Heading4Icon,
        attrs: {
          level: 4
        }
      },
      {
        name: "heading-5",
        icon: Heading5Icon,
        attrs: {
          level: 5
        }
      },
      {
        name: "heading-6",
        icon: Heading6Icon,
        attrs: {
          level: 6
        }
      }
    ]
  },
  list: {
    name: "list",
    icon: ListIcon,
    children: [
      {
        name: "list-bullet",
        icon: ListIcon
      },
      {
        name: "list-ordered",
        icon: ListOrdered
      },
      {
        name: "list-todo",
        icon: ListTodo
      }
    ]
  },
  blockquote: {
    name: "blockquote",
    icon: TextQuoteIcon
  },
  codeBlock: {
    name: "code-block",
    icon: MessageSquareCodeIcon
  },
  codeInline: {
    name: "code-inline",
    icon: CodeXmlIcon
  },
  image: {
    name: "image",
    icon: ImageIcon
  },
  bold: {
    name: "bold",
    icon: BoldIcon
  },
  italic: {
    name: "italic",
    icon: ItalicIcon
  },
  underline: {
    name: "underline",
    icon: UnderlineIcon
  },
  strike: {
    name: "strike",
    icon: StrikethroughIcon
  },
  highlight: {
    name: "highlight",
    icon: HighlighterIcon
  },
  link: {
    name: "link",
    icon: LinkIcon
  },
  algin: {
    name: "algin",
    icon: LinkIcon,
    children: [
      {
        name: "algin-left",
        icon: AlignLeftIcon
      },
      {
        name: "algin-center",
        icon: AlignCenterIcon
      },
      {
        name: "algin-right",
        icon: AlignRightIcon
      },
      {
        name: "algin-justify",
        icon: AlignJustifyIcon
      }
    ]
  }
};
