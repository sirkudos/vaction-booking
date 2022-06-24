import React from "react";
import { Theme } from "../../Theme";
import { StyledFlexWrapper } from "../common/Basics/StyledFlexWrapper";
import { StyledHeading } from "../common/Basics/StyledHeading";
import { StyledText } from "../common/Basics/StyledText";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledFlexWrapper
      width="100%"
      background={Theme.colors.primaryColor}
      padding="2rem 4rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <StyledHeading>VACATION</StyledHeading>
      <StyledFlexWrapper gap="2rem">
        <Link to="/">
          {" "}
          <StyledText cursor="pointer">Login</StyledText>
        </Link>

        <Link to="/">
          {" "}
          <StyledText cursor="pointer">Register</StyledText>
        </Link>
      </StyledFlexWrapper>
    </StyledFlexWrapper>
  );
};

export default NavBar;
