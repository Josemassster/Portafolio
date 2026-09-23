import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ButtonTranslate from "./ButtonTranslate";
import { useTranslation } from "react-i18next";
import { scrollToSection } from "../helpers/ScrollHelper";
import { openNewWindows } from "../utils/Pdfutils";
import { linkMailto } from "../helpers/MailHelper";
type Props = {};

function NavbarComponent({}: Props) {
  const { t } = useTranslation();
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex align-items-center">
          <Navbar.Brand className="fs-4">
            <i className="bi bi-journal-code"></i>
          </Navbar.Brand>
          <Nav className="me-auto d-flex gap-3">
            <Nav.Link
              className="d-inline-flex align-items-center gap-2"
              onClick={() => {
                scrollToSection("aboutMe");
              }}
            >
              <i className="bi bi-person fs-4"></i>
              {t("navbar.perfil")}
            </Nav.Link>
            <Nav.Link
              className="d-inline-flex align-items-center gap-2"
              onClick={() => {
                scrollToSection("experiencie");
              }}
            >
              <i className="bi bi-briefcase fs-4"></i>
              {t("navbar.experiencia")}
            </Nav.Link>
            <Nav.Link
              className="d-inline-flex align-items-center gap-2"
              onClick={() => {
                scrollToSection("education");
              }}
            >
              <i className="bi bi-mortarboard fs-4"></i>
              {t("navbar.educacion")}
            </Nav.Link>
            <Nav.Link
              className="d-inline-flex align-items-center gap-2"
              onClick={() => {
                scrollToSection("stack");
              }}
            >
              <i className="bi bi-cpu fs-4"></i>
              {t("navbar.habilidades-tecnicas")}
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center gap-2">
            <Button
              variant="outline-light"
              onClick={() => {
                openNewWindows(linkMailto);
              }}
            >
              <i className="bi bi-envelope-at"></i>
            </Button>
            <Button
              variant="outline-light"
              onClick={() => {
                openNewWindows(import.meta.env.VITE_GITHUB);
              }}
            >
              <i className="bi bi-github"></i>
            </Button>
            <Button
              variant="outline-light"
              onClick={() => {
                openNewWindows(import.meta.env.VITE_LINKEDINK);
              }}
            >
              <i className="bi bi-linkedin"></i>
            </Button>
            <ButtonTranslate />
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
