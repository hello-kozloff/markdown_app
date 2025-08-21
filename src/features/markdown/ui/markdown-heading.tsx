import {
  ChevronDownIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  HeadingIcon
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useTranslations } from "next-intl";
import { useMarkdownNode } from "@/entities/markdown";

export function MarkdownHeading() {
  const t = useTranslations("tools");
  const markdownNode =
    useMarkdownNode();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ToolbarItem
          as="div"
          isActive={markdownNode.isActive(
            "heading"
          )}
        >
          <HeadingIcon size={16} />
          <ChevronDownIcon size={10} />
        </ToolbarItem>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          disabled={markdownNode.isActive(
            "heading",
            { level: 1 }
          )}
        >
          <Heading1Icon />
          {t("heading-1")}
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={markdownNode.isActive(
            "heading",
            { level: 2 }
          )}
        >
          <Heading2Icon />
          {t("heading-2")}
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={markdownNode.isActive(
            "heading",
            { level: 3 }
          )}
        >
          <Heading3Icon />
          {t("heading-3")}
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={markdownNode.isActive(
            "heading",
            { level: 4 }
          )}
        >
          <Heading4Icon />
          {t("heading-4")}
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={markdownNode.isActive(
            "heading",
            { level: 5 }
          )}
        >
          <Heading5Icon />
          {t("heading-5")}
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={markdownNode.isActive(
            "heading",
            { level: 6 }
          )}
        >
          <Heading6Icon />
          {t("heading-6")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
