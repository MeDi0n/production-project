import { useState } from "react";

import { useTranslation } from "react-i18next";

import { RatingCard } from "@/entities/Rating";
import { Page } from "@/widgets/Page/Page";

const MainPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <Page>
      {t("Главная страница")}
      <RatingCard
        title={"Как вам статья?"}
        feedbackTitle={"Оставьте отзыв о статье"}
        hasFeedback
      />
    </Page>
  );
};

export default MainPage;
