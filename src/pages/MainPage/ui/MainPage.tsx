import { BugButton } from "app/providers/ErrorBoundary";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t("Главная")}
    </div>
  );
};

export default MainPage;
