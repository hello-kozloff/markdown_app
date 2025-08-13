import {
  ButtonHTMLAttributes,
  ElementType
} from "react";
import { cn } from "@/shared/lib/utils";

export interface MarkdownButtonProps<
  T extends ElementType
> extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: T;
  isActive?: boolean;
  className?: string;
}

export function MarkdownButton<
  T extends ElementType = "button"
>({
  as,
  children,
  isActive,
  className,
  ...props
}: MarkdownButtonProps<T>) {
  const Component = as || "button";
  return (
    <Component
      {...props}
      className={cn(
        "p-2.5 flex gap-0.5 items-center text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer rounded-full",
        isActive &&
          "text-white bg-white/15 hover:bg-white/15",
        className
      )}
    >
      {children}
    </Component>
  );
}
