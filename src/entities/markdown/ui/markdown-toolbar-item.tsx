"use client";

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
import { useTranslations } from "next-intl";
import { cn } from "@/shared/lib/utils";

export interface MarkdownToolbarItemProps {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref">
  >;
  children?: Omit<
    MarkdownToolbarItemProps,
    "children"
  >[];
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export function MarkdownToolbarItem({
  icon: IconComponent,
  isActive,
  isDisabled,
  children,
  onClick
}: MarkdownToolbarItemProps) {
  const t = useTranslations("toolbar");

  if (!!children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="rounded-full"
        >
          <ToolbarItem
            as="div"
            isActive={isActive}
            disabled={isDisabled}
            className={cn(
              isActive
                ? "data-[state=open]:bg-blue-500/15 data-[state=open]:border-border data-[state=open]:text-blue-500"
                : "data-[state=open]:bg-white/5 data-[state=open]:text-white"
            )}
          >
            <IconComponent size={16} />
            <ChevronDownIcon
              size={10}
            />
          </ToolbarItem>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {children.map(
            (toolbarItem, index) => (
              <DropdownMenuItem
                key={toolbarItem.name}
                icon={
                  <toolbarItem.icon
                    size={16}
                  />
                }
                variant={cn({
                  active:
                    toolbarItem.isActive
                })}
                onClick={
                  toolbarItem.onClick
                }
              >
                {t(toolbarItem.name)}
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <ToolbarItem
      isActive={isActive}
      disabled={isDisabled}
      onClick={onClick}
    >
      <IconComponent size={16} />
    </ToolbarItem>
  );
}
