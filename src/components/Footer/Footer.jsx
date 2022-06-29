import React from "react";
import {
  footerSection1,
  footerSection2,
  footerSection3,
  footerSection4,
} from "../../HotelData";
import { StyledFlexWrapper } from "../common/Basics/StyledFlexWrapper";
import { StyledList } from "../common/Basics/StyledList";
import { Link } from "react-router-dom";
import { StyledListItem } from "../common/Basics/StyledListItem";
import { Theme } from "../../Theme";

const Footer = () => {
  return (
    <StyledFlexWrapper
      background={Theme.colors.primaryColor}
      borderTop={`2px solid ${Theme.colors.secondaryColor}`}
      justifyContent="space-between"
      padding="4rem"
    >
      <StyledFlexWrapper flexDirection="column">
        {footerSection1.map((item, index) => (
          <StyledList key={index}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <StyledListItem>{item}</StyledListItem>
            </Link>
          </StyledList>
        ))}
      </StyledFlexWrapper>

      <StyledFlexWrapper flexDirection="column">
        {footerSection2.map((item, index) => (
          <StyledList key={index}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <StyledListItem>{item}</StyledListItem>
            </Link>
          </StyledList>
        ))}
      </StyledFlexWrapper>

      <StyledFlexWrapper flexDirection="column">
        {footerSection3.map((item, index) => (
          <StyledList key={index}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <StyledListItem>{item}</StyledListItem>
            </Link>
          </StyledList>
        ))}
      </StyledFlexWrapper>

      <StyledFlexWrapper flexDirection="column">
        {footerSection4.map((item, index) => (
          <StyledList key={index}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <StyledListItem>{item}</StyledListItem>
            </Link>
          </StyledList>
        ))}
      </StyledFlexWrapper>
    </StyledFlexWrapper>
  );
};

export default Footer;
