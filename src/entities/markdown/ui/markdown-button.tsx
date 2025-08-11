import {
  ElementType,
  PropsWithChildren
} from "react";

export interface MarkdownButtonProps<
  T extends ElementType
> extends PropsWithChildren {
  as?: T;
}

export function MarkdownButton<
  T extends ElementType = "button"
>({
  as,
  children
}: MarkdownButtonProps<T>) {
  const Component = as || "button";
  return (
    <Component className="p-2.5 flex gap-0.5 items-center text-gray-400 hover:text-white hover:bg-white/5 active:bg-white/10 cursor-pointer transition-all rounded-full">
      {children}
    </Component>
  );
}
