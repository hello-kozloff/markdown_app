import { ForwardRefExoticComponent } from "react";
import { ChevronDownIcon, LucideProps } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/shared/ui/dropdown-menu";
import { ToolbarItem } from "@/shared/ui/toolbar";
import { useTranslations } from "next-intl";

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
    "children" | "isActive"
  >[];
  isActive?: boolean;
}

export function MarkdownToolbarItem({
  icon: IconComponent,
  isActive,
  children
}: MarkdownToolbarItemProps) {
  const t = useTranslations("toolbar");

  if (!!children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
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
                {t(toolbarItem.name)}
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <ToolbarItem isActive={isActive}>
      <IconComponent size={16} />
    </ToolbarItem>
  );
}