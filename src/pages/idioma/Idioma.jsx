import { useTranslation } from "react-i18next";

const Idioma = () => {
  const t = useTranslation();
  const changeTranslation = useChangeLanguage('fr');

  return (
    <div>
      <h1>Idioma page</h1>
      <h2>{t("welcome")}</h2>
    </div>
  );
};

export default Idioma;
