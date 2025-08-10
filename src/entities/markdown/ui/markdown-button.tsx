import { PropsWithChildren } from "react";

export function MarkdownButton({
  children
}: PropsWithChildren) {
  return (
    <button
      type="button"
      className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 cursor-pointer transition-all rounded-full"
    >
      {children}
    </button>
  );
}
