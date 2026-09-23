import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { openNewWindows } from "../utils/Pdfutils";
import { useTranslation } from "react-i18next";

type Props = {
  img: string;
  institucion: string;
  title: string;
  content: string;
  estado: string; // Puede ser "finalizado" o "en curso" / "en progreso"
  fieldId: string;
};

function CardComponent({
  img,
  institucion,
  title,
  content,
  estado,
  fieldId,
}: Props) {
  const { t } = useTranslation();

  // Normalizamos el estado para la comparación de estilos visuales
  const isFinalizado =
    estado.toLowerCase() === "finalizado" ||
    estado.toLowerCase() === "completed";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="mb-3">
          <h4 className="mb-1">{title}</h4>
          <span>{institucion}</span>
        </Card.Title>
        <Card.Text className="mb-4 flex-grow-1">
          <span>{content}</span>
          <div className="d-flex flex-wrap gap-2 mt-2">
            <span
              className={`badge font-monospace fw-normal px-2 py-1.5 ${
                isFinalizado ? "bg-success" : "bg-danger"
              }`}
            >
              {isFinalizado
                ? t("education.status.completed")
                : t("education.status.ongoing")}
            </span>
          </div>
        </Card.Text>
        <Button variant="primary" onClick={() => openNewWindows(fieldId)}>
          {t("education.viewCertificate")}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
