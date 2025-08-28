"use client";

import { JSX } from "react";
import { Toolbar, ToolbarGroup } from "@/shared/ui/toolbar";
import { generateKey } from "@/shared/lib/utils";

export interface MarkdownToolbarProps {
  name: string;
  toolbar: (() => JSX.Element)[][];
}

export const markdownToolbarMotion = {
  initial: {
    opacity: 0,
    y: -4
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.4
  }
};

export function MarkdownToolbar({
  name,
  toolbar
}: MarkdownToolbarProps) {
  return (
    <Toolbar
      {...markdownToolbarMotion}
      sticky
    >
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
