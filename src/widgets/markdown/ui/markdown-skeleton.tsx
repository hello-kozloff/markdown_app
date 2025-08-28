import { LoaderCircle } from "lucide-react";

export function MarkdownSkeleton() {
  return (
    <div className="h-full flex">
      <LoaderCircle className="m-auto animate-spin text-white/80" />
    </div>
  );
}
