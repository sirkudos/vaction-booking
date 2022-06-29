import React from "react";
import NavItem from "rsuite/esm/Nav/NavItem";
import { StyledButton } from "../../../components/common/Basics/StyledButton";
import { StyledContainer } from "../../../components/common/Basics/StyledContainer";
import { StyledFlexWrapper } from "../../../components/common/Basics/StyledFlexWrapper";
import { StyledHeading } from "../../../components/common/Basics/StyledHeading";
import { StyledImage } from "../../../components/common/Basics/StyledImage";
import { StyledInput } from "../../../components/common/Basics/StyledInput";
import { StyledText } from "../../../components/common/Basics/StyledText";
import { searchResult } from "../../../HotelData";
import { Theme } from "../../../Theme";

const SearchResult = () => {
  return (
    <StyledContainer width="75%" padding="0">
      {searchResult.map((data) => (
        <StyledFlexWrapper
          border="1px solid gray"
          margin="0 0 1rem 0"
          justifyContent="space-between"
        >
          {" "}
          <StyledFlexWrapper width="30%" padding="1rem">
            {" "}
            <StyledImage
              src={data.photo}
              alt="house"
              width="100%"
              objectFit="cover"
            />
          </StyledFlexWrapper>
          <StyledContainer>
            <StyledFlexWrapper
              justifyContent="space-between"
              alignItem="center"
            >
              <StyledHeading
                color={Theme.colors.primaryColor}
                fontSize="2.5rem"
              >
                {data.title}
              </StyledHeading>
              <StyledText
                padding="1.8rem 0 0 0"
                color={Theme.colors.primaryColor}
                fontWeight="bold"
              >
                {data.grade}
              </StyledText>
              <StyledFlexWrapper
                width="3rem"
                hight="1rem"
                margin="2rem  0 0 0"
                borderRadius="4px"
                justifyContent="center"
                alignItems="center"
                background={Theme.colors.secondaryColor}
              >
                {" "}
                <StyledText color={Theme.colors.neutralColor} fontSize="1.3rem">
                  {data.rating}
                </StyledText>
              </StyledFlexWrapper>{" "}
            </StyledFlexWrapper>
            <StyledText padding="0 0 1rem 0" color={Theme.colors.tertiaryColor}>
              {data.distance}
            </StyledText>
            <StyledFlexWrapper
              background={Theme.colors.secondaryColor}
              padding="0.4rem"
              width="max-content"
              borderRadius="4px"
            >
              <StyledText>{data.bonus}</StyledText>
            </StyledFlexWrapper>
            <StyledText padding="1rem 0 0 0" color={Theme.colors.generalColor}>
              {" "}
              {data.made}
            </StyledText>
            <StyledFlexWrapper
              justifyContent="space-between"
              padding="1rem 0 0 0"
            >
              <StyledText color={Theme.colors.tertiaryColor}>
                Entire studio. 1 bedroom. 21m square 1 full bed
              </StyledText>
              <StyledText color={Theme.colors.primaryColor}>
                {data.price}
              </StyledText>
            </StyledFlexWrapper>
            <StyledFlexWrapper
              justifyContent="space-between"
              padding="1rem 0 0 0"
            >
              <StyledText color={Theme.colors.primaryColor}>
                {data.bonus2}
              </StyledText>
              <StyledText color={Theme.colors.tertiaryColor}>
                {data.bonus3}
              </StyledText>
            </StyledFlexWrapper>
            <StyledFlexWrapper
              justifyContent="space-between"
              gap="2rem"
              padding="1rem 0 2rem 0"
              alignItems="center"
            >
              <StyledText color={Theme.colors.primaryColor}>
                {data.note}
              </StyledText>
              <StyledButton background={Theme.colors.secondaryColor}>
                {data.buttonText}
              </StyledButton>
            </StyledFlexWrapper>
          </StyledContainer>
        </StyledFlexWrapper>
      ))}
    </StyledContainer>
  );
};

export default SearchResult;
