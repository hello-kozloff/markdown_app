import { cn } from "@/shared/lib/utils";
import { ComponentProps } from "react";

export interface InputProps
  extends ComponentProps<"input"> {
  variant?: "primary" | "transparent";
}

export function Input({
  className,
  type,
  variant = "primary",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        variant === "primary" &&
          cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          ),
        variant === "transparent" &&
          cn(
            "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w-full min-w-0 bg-transparent transition-[color] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          ),
        className
      )}
      {...props}
    />
  );
}
