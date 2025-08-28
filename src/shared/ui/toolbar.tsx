import {
  ButtonHTMLAttributes,
  ElementType,
  PropsWithChildren
} from "react";
import { motion } from "framer-motion";
import { cn } from "@/shared/lib/utils";
import { PropsWithClassName } from "@/shared/types/utils";
import { MotionNodeAnimationOptions } from "motion-dom";

export type ToolbarProps =
  PropsWithClassName<
    PropsWithChildren<
      {
        sticky?: boolean;
      } & MotionNodeAnimationOptions
    >
  >;

export type ToolbarGroupProps =
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
  sticky,
  className,
  children,
  ...props
}: ToolbarProps) {
  return (
    <motion.div
      {...props}
      className={cn(
        className,
        "flex border-b bg-background",
        {
          "sticky top-0": sticky
        }
      )}
    >
      <div className="mx-auto p-2 flex">
        {children}
      </div>
    </motion.div>
  );
}

export function ToolbarGroup({
  className,
  children
}: ToolbarGroupProps) {
  return (
    <div
      className={cn(
        "px-2 flex gap-1 border-r last:border-r-0",
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
        "p-2.5 border border-transparent",
        "flex gap-0.5 items-center",
        "not-disabled:cursor-pointer transition ease-in-out rounded-full data-[state=open]:border-border",
        {
          "text-gray-400 hover:not-disabled:text-white hover:not-disabled:bg-white/5 checked:bg-blue-500":
            !isActive,
          "text-blue-500 bg-blue-500/10 hover:bg-blue-500/15":
            isActive,
          "text-gray-400/40":
            props.disabled
        }
      )}
    >
      {children}
    </Component>
  );
}
