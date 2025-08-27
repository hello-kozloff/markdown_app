import {
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  HeadingIcon
} from "lucide-react";
import { MarkdownToolbarItem } from "@/entities/markdown";

export function Heading() {
  // const t = useTranslations("tools");
  // const markdownNode = useMarkdownNode({
  //   node: "heading"
  // });

  return (
    <MarkdownToolbarItem
      name="heading"
      icon={HeadingIcon}
    >
      {[
        {
          name: "heading-1",
          icon: Heading1Icon,
          attrs: { level: 1 }
        },
        {
          name: "heading-2",
          icon: Heading2Icon,
          attrs: { level: 2 }
        },
        {
          name: "heading-3",
          icon: Heading3Icon,
          attrs: { level: 3 }
        },
        {
          name: "heading-4",
          icon: Heading4Icon,
          attrs: { level: 4 }
        },
        {
          name: "heading-5",
          icon: Heading5Icon,
          attrs: { level: 5 }
        },
        {
          name: "heading-6",
          icon: Heading6Icon,
          attrs: { level: 6 }
        }
      ]}
    </MarkdownToolbarItem>
  );
}
