import {
  hasLocale,
  NextIntlClientProvider
} from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { routing } from "@/shared/i18n/routing";

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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
