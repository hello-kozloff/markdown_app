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
import { useEditorState } from "@handlewithcare/react-prosemirror";
import { isNodeActive } from "@/shared/lib/utils";
import { MarkdownTool } from "./markdown-tool";

export function MarkdownToolHeading() {
  const t = useTranslations("tools");
  const state = useEditorState();

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <MarkdownTool
            as="span"
            className="hover:bg-transparent text-inherit"
            isActive={isNodeActive(
              "heading",
              state
            )}
          >
            <HeadingIcon size={16} />
            <ChevronDownIcon
              size={10}
            />
          </MarkdownTool>
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
