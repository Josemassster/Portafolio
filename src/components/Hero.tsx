import { Button } from "react-bootstrap";
import { openNewWindows } from "../utils/Pdfutils";
import { useTranslation } from "react-i18next";

type Props = {};

function Hero({}: Props) {
  const { t } = useTranslation();

  const urlCV =
    "https://drive.google.com/file/d/1HFCBt6ji8TAvU8u5yAa-2mqFq3KG1oY4/view?usp=sharing";

  return (
    <>
      <section className="d-flex align-items-center justify-content-center p-5 my-5">
        <div className="w-100 d-flex flex-column align-items-center">
          <h2>{t("hero.greeting")}</h2>
          <h3>José Guillermo Vargas Rodríguez</h3>
          <h4>Full Stack Developer</h4>
          <div>
            <Button
              onClick={() => {
                openNewWindows(urlCV);
              }}
            >
              {t("hero.downloadBtn")}
            </Button>
          </div>
        </div>
        <iframe
          width="100%"
          height="340"
          src="https://www.youtube.com/embed/o-Zm4y4Fv8o?si=kyLdR2HuDbsg45iZ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </section>
    </>
  );
}

export default Hero;
