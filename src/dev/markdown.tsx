import { JSX } from "react";
import { MarkdownToolbar } from "./markdown-toolbar";
import { MarkdownContent, MarkdownContext } from "@/entities/markdown";

export interface MarkdownProps {
  name: string;
  data: string;
  toolbar?: (() => JSX.Element)[][];
  disabled?: boolean;
  readonly?: boolean;
}
export function Markdown({
  name,
  data,
  toolbar
}: MarkdownProps) {
  return (
    <MarkdownContext data={data}>
      {toolbar && (
        <MarkdownToolbar
          name={name}
          toolbar={toolbar}
        />
      )}
      <MarkdownContent />
    </MarkdownContext>
  );
}
