type Props = {};
import Container from "react-bootstrap/Container";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Stack from "../components/Stack";
import Experiencia from "../components/Experiencia";
import Eduaccion from "../components/Eduaccion";
import "../components/CardComponent.css";

export default function Home({}: Props) {
  return (
    <Container>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Stack></Stack>
      <Experiencia></Experiencia>
      <Eduaccion></Eduaccion>
    </Container>
  );
}
