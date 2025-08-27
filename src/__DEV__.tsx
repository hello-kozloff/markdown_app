import {
  ForwardRefExoticComponent,
  JSX
} from "react";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from "@/shared/ui/toolbar";
import {
  ChevronDownIcon,
  LucideProps,
  Undo2Icon
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/shared/ui/dropdown-menu";

export function generateKey(
  name: string,
  baseName: string,
  index: number
) {
  return `${baseName}-${name}-${index}`;
}

export type MarkdownToolbarItems =
  (() => JSX.Element)[][];

export interface MarkdownToolbarItemProps {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref">
  >;
  attrs?: Record<
    string,
    string | number
  >;
  children?: Omit<
    MarkdownToolbarItemProps,
    "children"
  >[];
}

export interface MarkdownProps {
  name: string;
  toolbar?: MarkdownToolbarItems;
  disabled?: boolean;
  readonly?: boolean;
}

export interface MarkdownToolbarProps {
  name: string;
  toolbar: MarkdownToolbarItems;
}

export function Undo() {
  return (
    <MarkdownToolbarItem
      name="undo"
      icon={Undo2Icon}
    />
  );
}

export function Redo() {
  return (
    <MarkdownToolbarItem
      name="redo"
      icon={Undo2Icon}
    />
  );
}

export function Heading() {
  return (
    <MarkdownToolbarItem
      name="heading"
      icon={Undo2Icon}
    >
      {[
        {
          name: "heading-1",
          icon: Undo2Icon,
          attrs: { level: 1 }
        },
        {
          name: "heading-2",
          icon: Undo2Icon,
          attrs: { level: 2 }
        },
        {
          name: "heading-3",
          icon: Undo2Icon,
          attrs: { level: 3 }
        },
        {
          name: "heading-4",
          icon: Undo2Icon,
          attrs: { level: 4 }
        }
      ]}
    </MarkdownToolbarItem>
  );
}

export function MarkdownToolbarItem({
  icon: IconComponent,
  children
}: MarkdownToolbarItemProps) {
  if (!!children) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ToolbarItem as="div">
            <IconComponent size={16} />
            <ChevronDownIcon
              size={10}
            />
          </ToolbarItem>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {children.map(
            (toolbarItem) => (
              <DropdownMenuItem
                key={toolbarItem.name}
              >
                <toolbarItem.icon
                  size={16}
                />
                {toolbarItem.name}
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <ToolbarItem>
      <IconComponent size={16} />
    </ToolbarItem>
  );
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

export function Example() {
  return (
    <Markdown
      name="example"
      toolbar={[
        [Undo, Redo],
        [Heading]
      ]}
      readonly
      disabled
    />
  );
}
