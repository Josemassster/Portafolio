import { useTranslation } from "react-i18next";
import "./stack.css";

type Props = {};

interface Technology {
  name: string;
  iconClass: string;
}

function Stack({}: Props) {
  const { t } = useTranslation();

  const technologies: Technology[] = [
    { name: "HTML5", iconClass: "devicon-html5-plain colored" },
    { name: "CSS3", iconClass: "devicon-css3-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "TypeScript", iconClass: "devicon-typescript-plain colored" },
    { name: "React", iconClass: "devicon-react-original colored" },
    { name: "Angular", iconClass: "devicon-angular-plain colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
    { name: "Express", iconClass: "devicon-express-original" },
    { name: "Beego (Go)", iconClass: "devicon-go-original-wordmark colored" },
    { name: "PostgreSQL", iconClass: "devicon-postgresql-plain colored" },
    { name: "MySQL", iconClass: "devicon-mysql-original" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
    { name: "Git", iconClass: "devicon-git-plain colored" },
    { name: "Docker", iconClass: "devicon-docker-plain colored" },
    { name: "Bootstrap", iconClass: "devicon-bootstrap-plain colored" },
    { name: "Tailwind CSS", iconClass: "devicon-tailwindcss-original colored" },
  ];

  // Duplicamos la lista para el efecto de slider infinito en tu track
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="p-5" id="stack">
      <div>
        <h2 className="mb-5 text-white fw-bold tracking-tight border-bottom border-secondary pb-3">
          {t("stack.title")}
        </h2>
      </div>
      <div className="slider py-5">
        <div className="slide-track">
          {duplicatedTechs.map((tech, index) => (
            <div className="tech-card" key={`${tech.name}-${index}`}>
              <i
                className={`${tech.iconClass} tech-icon`}
                title={tech.name}
              ></i>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
