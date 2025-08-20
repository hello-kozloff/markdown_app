import { MarkdownContent } from "@/___DEV___/entities/markdown";
import { MarkdownToolbar } from "@/___DEV___/widgets/markdown";

const content = `
  # Getting started
  
  ~~Этот текст будет зачёркнут~~

  Welcome to the *Simple Editor* template! This template integrates open source UI components and Tiptap extensions licensed under MIT.

  Integrate it by following the [Tiptap UI Components docs](https://duckduckgo.com "Tiptap UI Components docs") or using our CLI tool.

  ## Features

  > A fully responsive rich text editor with built-in support for common formatting and layout tools. Type markdown \`**\` or use keyboard shortcuts \`⌘+B\` for most all common markdown marks.

  Add images, customize alignment, and apply advanced formatting to make your writing more engaging and professional.

  ![The San Juan Mountains are beautiful!](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg?auto=format&fit=clip&q=40&w=1080 "San Juan Mountains")
  
  1. Superscript (x2) and Subscript (H2O) for precision.
  2. Typographic conversion: automatically convert to \`->\` an arrow →.
  
  ***
  
  ## Make it your own
  
  Switch between light and dark modes, and tailor the editor's appearance with customizable CSS to match your style.
`;

export default function DocumentPage() {
  return (
    <div>
      <MarkdownToolbar />
      <MarkdownContent
        initialMarkdown={content}
      />
    </div>
  );
}
