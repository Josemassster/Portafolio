import type { ReactNode } from "react";
import NavbarComponent from "../components/Navbar";
import "./MainLayout.css";
import FooterComponent from "../components/FooterComponent";
type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
}

export default MainLayout;
