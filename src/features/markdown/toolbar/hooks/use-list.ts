import { useCallback } from "react";
import { ListIcon } from "lucide-react";
import { useMarkdown } from "@/entities/markdown";

const icons = {
  bullet_list: ListIcon,
  ordered_list: ListIcon
};

export function useList() {
  const markdown = useMarkdown();

  const createConfig = useCallback(
    (
      nodes: (
        | "bullet_list"
        | "ordered_list"
      )[]
    ) =>
      nodes.map((node) => ({
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
    [markdown]
  );

  return { createConfig };
}
