import { PropsWithChildren } from "react";

export function MarkdownInlineBlock({
  children
}: PropsWithChildren) {
  return (
    <div className="px-1.5 flex gap-0.5 border-r last:border-r-0">
      {children}
    </div>
  );
}
