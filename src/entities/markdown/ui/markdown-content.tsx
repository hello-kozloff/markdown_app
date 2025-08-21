"use client";

import { ProseMirrorDoc } from "@handlewithcare/react-prosemirror";

export function MarkdownContent() {
  return (
    <div className="max-w-2xl mx-auto p-12 prose outline-0">
      <ProseMirrorDoc />
    </div>
  );
}
