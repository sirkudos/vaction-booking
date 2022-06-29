import React from "react";
import { propertyTypeData } from "../../HotelData";
import { Theme } from "../../Theme";
import { StyledFlexWrapper } from "../common/Basics/StyledFlexWrapper";
import { StyledImage } from "../common/Basics/StyledImage";
import { StyledText } from "../common/Basics/StyledText";

const PropertyType = () => {
  return (
    <StyledFlexWrapper
      justifyContent="space-between"
      gap="2rem"
      padding="0 0 2rem 0"
    >
      {propertyTypeData.map((item, index) => (
        <StyledFlexWrapper key={index} flexDirection="column">
          <StyledImage
            src={item.photo}
            objectFit="cover"
            width="100%"
            height="100%"
          />
          <StyledFlexWrapper flexDirection="column">
            <StyledText
              color={Theme.colors.generalColor}
              fontWeight="bold"
              fontSize="1.8rem"
            >
              {item.nameType}
            </StyledText>
            <StyledText color={Theme.colors.tertiaryColor} fontSize="1.5rem">
              {item.count}
            </StyledText>
          </StyledFlexWrapper>
        </StyledFlexWrapper>
      ))}
    </StyledFlexWrapper>
  );
};

export default PropertyType;
