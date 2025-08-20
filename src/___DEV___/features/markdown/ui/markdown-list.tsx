import {
  ChevronDownIcon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon
} from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/shared/ui/menubar";
import { useTranslations } from "next-intl";
import { MenuButton } from "../../../shared/ui/menu-button";

export function MarkdownList() {
  const t = useTranslations("tools");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <MenuButton
            as="span"
            className="hover:bg-transparent text-inherit"
          >
            <ListIcon size={16} />
            <ChevronDownIcon
              size={10}
            />
          </MenuButton>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <ListIcon className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("bullet-list")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <ListOrderedIcon className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("ordered-list")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <ListTodoIcon />
            <span className="text-sm leading-5">
              {t("task-list")}
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
