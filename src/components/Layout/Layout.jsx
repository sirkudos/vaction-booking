import React from "react";
import { StyledContainer } from "../common/Basics/StyledContainer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";

const Layout = ({ children, componentName }) => {
  return (
    <StyledContainer padding="0">
      <NavBar />
      <Header type={componentName} />

      {children}
      <Footer />
    </StyledContainer>
  );
};

export default Layout;
