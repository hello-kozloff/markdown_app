"use client";

import { MarkdownEditor } from "./components/test";
import { content } from "./components/content";

export default function DocumentPage() {
  return (
    <MarkdownEditor
      markdown={content}
    />
  );
}
