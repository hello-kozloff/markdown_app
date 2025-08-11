import {
  ElementType,
  PropsWithChildren
} from "react";
import { cn } from "@/shared/lib/utils";

export interface MarkdownButtonProps<
  T extends ElementType
> extends PropsWithChildren {
  as?: T;
  className?: string;
}

export function MarkdownButton<
  T extends ElementType = "button"
>({
  as,
  children,
  className
}: MarkdownButtonProps<T>) {
  const Component = as || "button";
  return (
    <Component
      className={cn(
        "p-2.5 flex gap-0.5 items-center text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer transition-all rounded-full",
        className
      )}
    >
      {children}
    </Component>
  );
}
