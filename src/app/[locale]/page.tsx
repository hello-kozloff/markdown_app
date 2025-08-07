import { useTranslations } from "next-intl";

export default function RootPage() {
  const t = useTranslations("common");

  return (
    <div>
      <p>{t("email")}</p>
      <p>{t("password")}</p>
    </div>
  );
}
