import React from "react";
import { Theme } from "../../Theme";
import { StyledButton } from "../common/Basics/StyledButton";
import { StyledFlexWrapper } from "../common/Basics/StyledFlexWrapper";
import { StyledInput } from "../common/Basics/StyledInput";
import { StyledText } from "../common/Basics/StyledText";

const EmailSubscription = () => {
  return (
    <StyledFlexWrapper
      background={Theme.colors.primaryColor}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding="4rem 0 "
    >
      <StyledFlexWrapper flexDirection="column">
        <StyledText textAlign="center" fontWeight="700">
          Save time, Save money
        </StyledText>
        <StyledText fontSize="1.3rem">
          Sign up and we will send you all the best cities in the world
        </StyledText>
      </StyledFlexWrapper>
      <StyledFlexWrapper
        gap="0.4rem"
        width="100%"
        justifyContent="center"
        padding="2rem 0 0 0"
      >
        <StyledInput type="text" width="50%" />
        <StyledButton background={Theme.colors.secondaryColor}>
          Subscribe
        </StyledButton>
      </StyledFlexWrapper>
      <StyledFlexWrapper width="100%" padding="0.5rem 0 0 30.7rem" gap="0.4rem">
        <StyledInput type="checkbox" width />
        <StyledText fontSize="1.3rem">
          Always receive update for our latest trips
        </StyledText>
      </StyledFlexWrapper>
    </StyledFlexWrapper>
  );
};

export default EmailSubscription;
