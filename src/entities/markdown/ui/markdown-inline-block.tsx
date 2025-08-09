import { PropsWithChildren } from "react";

export function MarkdownInlineBlock({
  children
}: PropsWithChildren) {
  return (
    <div className="px-2 flex gap-1 border-r last:border-r-0">
      {children}
    </div>
  );
}
