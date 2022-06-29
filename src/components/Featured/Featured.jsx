import React from "react";
import { featureData } from "../../HotelData";
import { StyledContainer } from "../common/Basics/StyledContainer";
import { StyledFlexWrapper } from "../common/Basics/StyledFlexWrapper";
import { StyledImage } from "../common/Basics/StyledImage";
import { StyledText } from "../common/Basics/StyledText";

const Featured = () => {
  return (
    <StyledFlexWrapper padding="4rem 0 2rem 0" gap="2rem">
      {featureData.map((item) => (
        <StyledFlexWrapper
          justifyContent="space-between"
          flexDirection="column"
          position="relative"
        >
          <StyledImage src={item.photo} width="100%" objectFit="cover" />
          <StyledFlexWrapper
            flexDirection="column"
            position="absolute"
            top="20rem"
            left="3rem"
          >
            <StyledText color="white" fontSize="4rem" fontWeight="bold">
              {item.name}
            </StyledText>
            <StyledText color="white" fontSize="2rem">
              {item.desc}
            </StyledText>
          </StyledFlexWrapper>
        </StyledFlexWrapper>
      ))}
    </StyledFlexWrapper>
  );
};

export default Featured;
