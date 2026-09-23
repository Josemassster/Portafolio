import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { scrollToSection } from "../helpers/ScrollHelper";
import { useTranslation } from "react-i18next";
import "./CardComponent.css";

type Props = {};

export default function AboutMe({}: Props) {
  const { t } = useTranslation();

  return (
    <>
      <section className="d-flex p-5 card-content" id="aboutMe">
        <div className="d-flex flex-column w100">
          <h2 className="mb-5 text-white fw-bold tracking-tight border-bottom border-secondary pb-3">
            {t("aboutMe.title")}
          </h2>
          <span className="p-2">{t("aboutMe.paragraph1")}</span>
          <span className="p-2">{t("aboutMe.paragraph2")}</span>
          <span className="p-2">{t("aboutMe.paragraph3")}</span>
          <span className="p-2">{t("aboutMe.paragraph4")}</span>
          <span className="p-2">{t("aboutMe.paragraph5")}</span>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center w-100">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://avatars.githubusercontent.com/u/107493326?v=4"
            />
            <Card.Body>
              <Card.Title>{t("aboutMe.card.title")}</Card.Title>
              <Card.Text>
                <p>{t("aboutMe.card.experience")}</p>
                <p>{t("aboutMe.card.companies")}</p>
                <p>{t("aboutMe.card.projects")}</p>
                <p>{t("aboutMe.card.specialty")}</p>
              </Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  scrollToSection("experiencie");
                }}
              >
                {t("aboutMe.card.button")}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}
