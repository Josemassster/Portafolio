export type SectionId = "aboutMe" | "experiencie" | "education" | "stack";

export const scrollToSection = (id: SectionId): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.warn(`La sección con el ID "${id}" no fue encontrada en el DOM.`);
  }
};
