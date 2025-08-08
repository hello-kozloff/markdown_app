import { hasLocale } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { routing } from "@/shared/i18n/routing";
import { GeistSans } from "geist/font/sans";
import { Providers } from "./providers";
import "@/shared/styles/stylesheet.css";

export default async function RootLayout({
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
