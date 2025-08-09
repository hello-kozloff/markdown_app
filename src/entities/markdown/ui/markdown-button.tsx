import { PropsWithChildren } from "react";

export function MarkdownButton({
  children
}: PropsWithChildren) {
  return (
    <button
      type="button"
      className="p-2 rounded-lg hover:bg-border cursor-pointer"
    >
      {children}
    </button>
  );
}
