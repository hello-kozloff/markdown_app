import {
  ChevronDown,
  List,
  ListOrdered,
  ListTodo
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

export function MarkdownButtonList() {
  const t = useTranslations("tools");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <MarkdownButton
            as="span"
            className="hover:bg-transparent text-inherit"
          >
            <List size={16} />
            <ChevronDown size={10} />
          </MarkdownButton>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <List className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("bullet-list")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <ListOrdered className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              {t("ordered-list")}
            </span>
          </MenubarItem>
          <MenubarItem>
            <ListTodo />
            <span className="text-sm leading-5">
              {t("task-list")}
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
