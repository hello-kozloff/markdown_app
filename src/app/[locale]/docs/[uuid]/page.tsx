"use client";

import { MarkdownEditor } from "@/entities/markdown";

const content = `
  # Заголовок первого уровня (h1)
  ## Заголовок второго уровня (h2)
  ### Заголовок третьего уровня (h3)
  #### Заголовок четвёртого уровня (h4)
`;

export default function DocumentPage() {
  return (
    <MarkdownEditor
      initialMarkdown={content}
    />
  );
}
