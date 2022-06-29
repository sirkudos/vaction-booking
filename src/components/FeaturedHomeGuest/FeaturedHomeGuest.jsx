import React from "react";
import { StyledFlexWrapper } from "../common/Basics/StyledFlexWrapper";
import { StyledImage } from "../common/Basics/StyledImage";
import { StyledText } from "../common/Basics/StyledText";
import { homeGuestData } from "../../HotelData";
import { Theme } from "../../Theme";

const FeaturedHomeGuest = () => {
  return (
    <StyledFlexWrapper
      gap="2rem"
      justifyContent="space-between"
      padding="0 0 2rem 0"
    >
      {homeGuestData.map((item) => (
        <StyledFlexWrapper
          flexDirection="column"
          justifyContent="space-between"
          flex="1"
        >
          <StyledImage
            src={item.photo}
            objectFit="cover"
            width="100%"
            height="100%"
          />

          <StyledFlexWrapper flexDirection="column" gap="0.6rem">
            <StyledText
              color={Theme.colors.generalColor}
              fontWeight="bold"
              fontSize="1.8rem"
            >
              {item.name}
            </StyledText>
            <StyledText color={Theme.colors.tertiaryColor} fontSize="1.5rem">
              {item.location}
            </StyledText>
            <StyledText color={Theme.colors.generalColor} fontSize="1.8rem">
              {item.price}
            </StyledText>
            <StyledFlexWrapper gap="1rem" alignItems="center">
              <StyledFlexWrapper
                width="3rem"
                hight="3rem"
                borderRadius="4px"
                justifyContent="center"
                alignItems="center"
                background={Theme.colors.secondaryColor}
              >
                {" "}
                <StyledText color={Theme.colors.neutralColor} fontSize="1.3rem">
                  {item.rating}
                </StyledText>
              </StyledFlexWrapper>

              <StyledText color={Theme.colors.generalColor} fontSize="1.5rem">
                {item.grade}
              </StyledText>
            </StyledFlexWrapper>
          </StyledFlexWrapper>
        </StyledFlexWrapper>
      ))}
    </StyledFlexWrapper>
  );
};

export default FeaturedHomeGuest;
