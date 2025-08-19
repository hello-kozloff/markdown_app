import { PropsWithChildren } from "react";

export function MarkdownGroup({
  children
}: PropsWithChildren) {
  return (
    <div className="px-2 flex gap-0.5 border-r last:border-r-0">
      {children}
    </div>
  );
}
