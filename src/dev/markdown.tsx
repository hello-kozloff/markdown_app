import { JSX } from "react";
import { MarkdownToolbar } from "./markdown-toolbar";

export interface MarkdownProps {
  name: string;
  toolbar?: (() => JSX.Element)[][];
  disabled?: boolean;
  readonly?: boolean;
}
export function Markdown({
  name,
  toolbar
}: MarkdownProps) {
  return (
    <div>
      {toolbar && (
        <MarkdownToolbar
          name={name}
          toolbar={toolbar}
        />
      )}
    </div>
  );
}
