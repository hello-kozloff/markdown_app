"use client";

import { DemoEditor } from "./components/test";
import { content } from "./components/content";

export default function DocumentPage() {
  return (
    <DemoEditor content={content} />
  );
}
