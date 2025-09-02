import { useCallback, useMemo } from "react";
import { ListIcon } from "lucide-react";
import { useMarkdown } from "@/entities/markdown";

const icons = {
  bullet_list: ListIcon,
  ordered_list: ListIcon
};

export interface UseListProps {
  nodes: (
    | "bullet_list"
    | "ordered_list"
  )[];
}

export function useList(
  props: UseListProps
) {
  const markdown = useMarkdown();

  const isActive = useMemo(
    () =>
      props.nodes.some((node) =>
        markdown.isNodeActive(
          markdown.getNodeType(node)
        )
      ),
    [markdown, props.nodes]
  );

  const create = useCallback(
    () =>
      props.nodes.map((node) => ({
        name: node,
        icon: icons[node],
        isActive: markdown.isNodeActive(
          markdown.getNodeType(node)
        ),
        onClick: () => {
          markdown.wrapIn(
            markdown.getNodeType(node)
          );
        }
      })),
    [markdown, props.nodes]
  );

  return { create, isActive };
}
