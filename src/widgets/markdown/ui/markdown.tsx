import { JSX } from "react";
import {
  MarkdownContent,
  MarkdownContext,
  MarkdownToolbar
} from "@/entities/markdown";
import { MarkdownSkeleton } from "./markdown-skeleton";

export interface MarkdownProps {
  name: string;
  data: string;
  toolbar?: (() => JSX.Element)[][];
  disabled?: boolean;
  readonly?: boolean;
}
export function Markdown(
  props: MarkdownProps
) {
  return (
    <MarkdownContext
      data={props.data}
      skeleton={<MarkdownSkeleton />}
    >
      {props.toolbar && (
        <MarkdownToolbar
          name={props.name}
          toolbar={props.toolbar}
        />
      )}
      <MarkdownContent />
    </MarkdownContext>
  );
}
