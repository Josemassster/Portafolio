import { Button } from "react-bootstrap";
import { scrollToSection } from "../helpers/ScrollHelper";
import { useTranslation } from "react-i18next";
import { linkMailto } from "../helpers/MailHelper";
import "./CardComponent.css";
import { openNewWindows } from "../utils/Pdfutils";

type Props = {};

function FooterComponent({}: Props) {
  const { t } = useTranslation();

  return (
    <section className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-secondary card-content h-100 ">
      <ul className="nav col-md-3 justify-content-start gap-1">
        {" "}
        <li className="nav-item">
          <Button
            variant="outline-light"
            onClick={() => {
              scrollToSection("aboutMe");
            }}
          >
            <i className="bi bi-person fs-4"></i>
          </Button>
        </li>{" "}
        <li className="nav-item">
          <Button
            variant="outline-light"
            onClick={() => {
              scrollToSection("experiencie");
            }}
          >
            <i className="bi bi-briefcase fs-4"></i>
          </Button>
        </li>{" "}
        <li className="nav-item">
          <Button
            variant="outline-light"
            onClick={() => {
              scrollToSection("education");
            }}
          >
            <i className="bi bi-mortarboard fs-4"></i>
          </Button>
        </li>{" "}
        <li className="nav-item">
          <Button
            variant="outline-light"
            onClick={() => {
              scrollToSection("stack");
            }}
          >
            <i className="bi bi-cpu fs-4"></i>
          </Button>
        </li>{" "}
      </ul>
      <p className="d-flex align-items-center justify-content-center text-center col-md-4 mb-0 text-white fw-light large fw-bold">
        © 2026
      </p>
      <ul className="nav col-md-4 justify-content-end gap-1">
        {" "}
        <li className="nav-item"></li>{" "}
        <li className="nav-item">
          <Button
            variant="outline-light"
            onClick={() => {
              openNewWindows(linkMailto);
            }}
          >
            <i className="bi bi-envelope-at fs-4"></i>
          </Button>
        </li>{" "}
        <li className="nav-item">
          <Button
            variant="outline-light"
            onClick={() => {
              openNewWindows(import.meta.env.VITE_GITHUB);
            }}
          >
            <i className="bi bi-github fs-4"></i>
          </Button>
        </li>{" "}
        <li className="nav-item">
          <Button
            variant="outline-light"
            onClick={() => {
              openNewWindows(import.meta.env.VITE_LINKEDINK);
            }}
          >
            <i className="bi bi-linkedin fs-4"></i>
          </Button>
        </li>{" "}
      </ul>
    </section>
  );
}

export default FooterComponent;
