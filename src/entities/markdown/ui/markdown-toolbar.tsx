import { JSX } from "react";
import {
  Toolbar,
  ToolbarGroup
} from "@/shared/ui/toolbar";
import { generateKey } from "@/shared/lib/utils";

export interface MarkdownToolbarProps {
  name: string;
  toolbar: (() => JSX.Element)[][];
}

export function MarkdownToolbar({
  name,
  toolbar
}: MarkdownToolbarProps) {
  return (
    <Toolbar sticky>
      {toolbar.map((items, i) => (
        <ToolbarGroup
          key={generateKey(
            "toolbar-group",
            name,
            i
          )}
        >
          {items.map((Component, j) => (
            <Component
              key={generateKey(
                "toolbar-item",
                name,
                j
              )}
            />
          ))}
        </ToolbarGroup>
      ))}
    </Toolbar>
  );
}