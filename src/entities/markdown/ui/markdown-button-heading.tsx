import {
  ChevronDown,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6
} from "lucide-react";
import { MarkdownButton } from "./markdown-button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/shared/ui/menubar";
import { useTranslations } from "next-intl";

export function MarkdownButtonHeading() {
  const t = useTranslations("tools");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <MarkdownButton
            as="span"
            className="hover:bg-transparent text-inherit"
          >
            <Heading size={16} />
            <ChevronDown size={10} />
          </MarkdownButton>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Heading1 className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-1")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading2 className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-2")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading3 className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-3")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading4 className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-4")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading5 className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-5")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <Heading6 className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("heading-6")}
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
