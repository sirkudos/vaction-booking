import React from "react";
import { StyledContainer } from "../common/Basics/StyledContainer";
import Header from "../Header/Header";
import NavBar from "../Navbar/NavBar";

const Layout = ({ children, componentName }) => {
  return (
    <StyledContainer padding="0">
      <NavBar />
      <Header type={componentName} />

      {children}
    </StyledContainer>
  );
};

export default Layout;
