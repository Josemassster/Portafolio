const miCorreo = "joseh.jgv55@gmail.com";
const asunto = encodeURIComponent("Contacto desde tu Portafolio");
const cuerpo = encodeURIComponent(
  "Hola, vi tu portafolio y me gustaría ponerme en contacto contigo...",
);

export const linkMailto = `mailto:${miCorreo}?subject=${asunto}&body=${cuerpo}`;
