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

export function MarkdownButtonList() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <MarkdownButton as="span">
            <List size={16} />
            <ChevronDown size={10} />
          </MarkdownButton>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <List className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              Bullet List
            </span>
          </MenubarItem>
          <MenubarItem>
            <ListOrdered className="text-lg text-gray-400" />
            <span className="text-sm leading-5">
              Ordered List
            </span>
          </MenubarItem>
          <MenubarItem>
            <ListTodo />
            <span className="text-sm leading-5">
              Task List
            </span>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
