import {
  hasLocale,
  NextIntlClientProvider
} from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { routing } from "@/shared/i18n/routing";
import { GeistSans } from "geist/font/sans";
import "@/styles/stylesheet.css";
import { ThemeProvider } from "@/shared/ui/theme-provider";

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (
    !hasLocale(routing.locales, locale)
  ) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={GeistSans.className}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
