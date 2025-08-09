import { Link } from "lucide-react";
import { MarkdownButton } from "./markdown-button";

export function MarkdownButtonLink() {
  return (
    <MarkdownButton>
      <Link size={16} />
    </MarkdownButton>
  );
}
