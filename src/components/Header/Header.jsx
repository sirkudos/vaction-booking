import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "../common/Basics/StyledContainer";
import { StyledFlexWrapper } from "../common/Basics/StyledFlexWrapper";
import { headerItems } from "../../HotelData";
import { StyledText } from "../common/Basics/StyledText";
import { Theme } from "../../Theme";
import SearchBar from "../common/SearchBar/SearchBar";

const Header = ({ type }) => {
  return (
    <StyledContainer
      background={Theme.colors.primaryColor}
      position="relative"
      padding={!type ? "4rem 3rem 5rem 3rem" : "4rem 3rem 10rem 3rem"}
    >
      <StyledFlexWrapper gap="3rem">
        {headerItems.map((item, index) => (
          <StyledFlexWrapper key={index} gap="0.7rem">
            <StyledText cursor="pointer" style={{ fontSize: "inherit" }}>
              {item.icon}
            </StyledText>
            <StyledText cursor="pointer">{item.label}</StyledText>
          </StyledFlexWrapper>
        ))}
      </StyledFlexWrapper>
      {type && (
        <StyledContainer padding="0">
          <StyledText
            fontSize="3rem"
            display="block"
            padding="4rem 0 0 0"
            fontWeight="bold"
          >
            A lifetime of discounts? its Genius.
          </StyledText>

          <StyledText padding="2rem 0 0 ">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free Vacation account
          </StyledText>
          <StyledFlexWrapper
            gap="0.3rem"
            border="1px solid grey"
            margin="3rem 0 0 0"
            padding="1.3rem"
            width="max-content"
            background={Theme.colors.secondaryColor}
            borderRadius="4px"
          >
            <Link to="/">
              {" "}
              <StyledText style={{ textDecoration: "underline" }}>
                Sign in
              </StyledText>
            </Link>

            <StyledText>/</StyledText>
            <Link to="/">
              {" "}
              <StyledText style={{ textDecoration: "underline" }}>
                Register
              </StyledText>
            </Link>
          </StyledFlexWrapper>
        </StyledContainer>
      )}

      <SearchBar type={type} />
    </StyledContainer>
  );
};

export default Header;
