import {
  ButtonHTMLAttributes,
  ElementType,
  PropsWithChildren
} from "react";
import { cn } from "@/shared/lib/utils";
import { PropsWithClassName } from "@/shared/types/utils";

export type ToolbarProps =
  PropsWithClassName<PropsWithChildren>;

export type ToolbarBlockProps =
  PropsWithClassName<PropsWithChildren>;

export type ToolbarItemProps<
  T extends ElementType
> =
  ButtonHTMLAttributes<HTMLButtonElement> &
    PropsWithChildren<
      PropsWithClassName<{
        as?: T;
        isActive?: boolean;
      }>
    >;

export function Toolbar({
  className,
  children
}: ToolbarProps) {
  return (
    <div
      className={cn(
        "p-2 flex",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ToolbarBlock({
  className,
  children
}: ToolbarBlockProps) {
  return (
    <div
      className={cn(
        "px-2 flex gap-0.5 border-r last:border-r-0",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ToolbarItem<
  T extends ElementType = "button"
>({
  as,
  children,
  isActive,
  className,
  ...props
}: ToolbarItemProps<T>) {
  const Component = as || "button";
  return (
    <Component
      {...props}
      className={cn(
        className,
        "p-2.5 flex gap-0.5 items-center text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer rounded-full",
        {
          "text-white bg-white/15 hover:bg-white/15":
            isActive
        }
      )}
    >
      {children}
    </Component>
  );
}
