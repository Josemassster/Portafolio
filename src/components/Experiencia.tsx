import { useTranslation } from "react-i18next";
import "./Experiencia.css";

type Props = {};

interface Job {
  puesto: string;
  empresa: string;
  periodo: string;
  logros: string[];
  techs: string[];
  estado: string;
}

function Experiencia({}: Props) {
  const { t } = useTranslation();

  const experiencias = t("experience.jobs", { returnObjects: true }) as Job[];

  return (
    <section className="container p-5 timeline-section" id="experiencie">
      <h2 className="mb-5 text-white fw-bold tracking-tight border-bottom border-secondary pb-3">
        {t("experience.title")}
      </h2>

      <div className="position-relative timeline-line ps-4 ms-2">
        {Array.isArray(experiencias) &&
          experiencias.map((job, index) => (
            <div key={index} className="position-relative mb-5 timeline-item">
              {/* Nodo indicador circular */}
              <div className="timeline-dot position-absolute rounded-circle border border-2 border-primary bg-dark"></div>

              {/* Cabecera del Puesto */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 gap-2">
                <div>
                  <h3 className="h4 text-white fw-bold mb-0 timeline-title">
                    {job.empresa}
                  </h3>
                  <span className="text-white fw-medium">{job.puesto}</span>
                </div>
                <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2 rounded-pill text-wrap text-start">
                  {job.periodo}
                </span>
              </div>

              {/* Lista de logros en viñetas limpias */}
              <ul className="text-secondary-emphasis lh-base mb-3 custom-bullet-list">
                {job.logros.map((logro, lIndex) => (
                  <li key={lIndex} className="mb-2 text-gray-300">
                    {logro}
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-2 mt-2">
                {job.techs.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="badge bg-dark border border-secondary text-light font-monospace fw-normal px-2 py-1.5"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge bg-danger border-secondary text-light font-monospace fw-normal px-2 py-1.5">
                  {job.estado}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Experiencia;
