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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/shared/ui/menubar";
import { useTranslations } from "next-intl";
import { ToolbarItem } from "@/shared/ui/toolbar";

export function MarkdownHeading() {
  const t = useTranslations("tools");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <ToolbarItem
            as="span"
            className="hover:bg-transparent text-inherit"
          >
            <HeadingIcon size={16} />
            <ChevronDownIcon
              size={10}
            />
          </ToolbarItem>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Heading1Icon className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-1")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading2Icon className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-2")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading3Icon className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-3")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading4Icon className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-4")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading5Icon className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-5")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading6Icon className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-6")}
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
