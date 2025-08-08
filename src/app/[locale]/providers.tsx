import { PropsWithChildren } from "react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/shared/ui/theme-provider";

export function Providers({
  children
}: PropsWithChildren) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
        enableSystem
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
