import { useTranslations } from "next-intl";
import {
  ChevronDownIcon,
  HeadingIcon
} from "lucide-react";
import {
  tools,
  useMarkdownNode
} from "@/entities/markdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownHeading() {
  const t = useTranslations("tools");
  const markdownNode = useMarkdownNode({
    node: "heading"
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ToolbarItem
          as="div"
          isActive={markdownNode.isActive()}
        >
          <HeadingIcon size={16} />
          <ChevronDownIcon size={10} />
        </ToolbarItem>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {tools.heading.children.map(
          (heading, index) => {
            const Icon = heading.icon;
            const level = index + 1;

            return (
              <DropdownMenuItem
                key={heading.name}
                onClick={() =>
                  markdownNode.setNode({
                    level
                  })
                }
              >
                <Icon size={16} />
                {t(heading.name)}
              </DropdownMenuItem>
            );
          }
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
