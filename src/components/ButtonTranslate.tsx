import { useTranslation } from "react-i18next";
import Dropdown from "react-bootstrap/Dropdown";

type Props = {};

function ButtonTranslate({}: Props) {
  const { t, i18n } = useTranslation();

  const TranslateLenguje = (leng: string) => {
    i18n.changeLanguage(leng);
  };
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {t("navbar.idioma")}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => TranslateLenguje("en")}>
          {t("navbar.ingles")}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => TranslateLenguje("es")}>
          {t("navbar.español")}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ButtonTranslate;
