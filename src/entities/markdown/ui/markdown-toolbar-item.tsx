import { ForwardRefExoticComponent } from "react";
import {
  ChevronDownIcon,
  LucideProps
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";
import { ToolbarItem } from "@/shared/ui/toolbar";

export interface MarkdownToolbarItemProps {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref">
  >;
  attrs?: Record<
    string,
    string | number
  >;
  children?: Omit<
    MarkdownToolbarItemProps,
    "children"
  >[];
}

export function MarkdownToolbarItem({
  icon: IconComponent,
  children
}: MarkdownToolbarItemProps) {
  if (!!children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ToolbarItem as="div">
            <IconComponent size={16} />
            <ChevronDownIcon
              size={10}
            />
          </ToolbarItem>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {children.map(
            (toolbarItem) => (
              <DropdownMenuItem
                key={toolbarItem.name}
              >
                <toolbarItem.icon
                  size={16}
                />
                {toolbarItem.name}
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <ToolbarItem>
      <IconComponent size={16} />
    </ToolbarItem>
  );
}
