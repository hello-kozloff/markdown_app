import {
  MarkdownContent,
  MarkdownContext
} from "@/entities/markdown";
import { MarkdownToolbar } from "@/widgets/markdown";

const content = `
 
  # Getting started

  Welcome to the *Simple Editor* template! This template integrates open source UI components and Tiptap extensions licensed under MIT.
  
`;

export default function DocumentPage() {
  return (
    <MarkdownContext
      initialMarkdown={content}
    >
      <MarkdownToolbar />
      <MarkdownContent />
    </MarkdownContext>
  );
}
