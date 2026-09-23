import { useTranslation } from "react-i18next";
import CardComponent from "./CardComponent";
import "./CardComponent.css";

type Props = {};

interface Estudio {
  img: string;
  institucion: string;
  educacion: string;
  content: string;
  estado: string;
  fieldId: string;
}

function Educacion({}: Props) {
  const { t } = useTranslation();

  // Obtenemos dinámicamente la lista de estudios traducida desde los archivos JSON
  const estudios = t("education.studiesList", {
    returnObjects: true,
  }) as Estudio[];

  return (
    <>
      <section className="d-flex flex-column p-5" id="education">
        <h2 className="mb-5 text-white fw-bold tracking-tight border-bottom border-secondary pb-3">
          {t("education.title")}
        </h2>
        <div className="d-flex justify-content-around p-2 flex-wrap gap-1">
          {Array.isArray(estudios) &&
            estudios.map((estudio, index) => (
              /* El contenedor inmediato del map DEBE tener d-flex */
              <div key={index} className="d-flex">
                <CardComponent
                  img={estudio.img}
                  institucion={estudio.institucion}
                  title={estudio.educacion}
                  content={estudio.content}
                  estado={estudio.estado}
                  fieldId={estudio.fieldId}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Educacion;
