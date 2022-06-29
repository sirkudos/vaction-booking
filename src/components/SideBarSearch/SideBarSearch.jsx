import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Theme } from "../../Theme";
import { StyledButton } from "../common/Basics/StyledButton";
import { StyledContainer } from "../common/Basics/StyledContainer";
import { StyledFlexWrapper } from "../common/Basics/StyledFlexWrapper";
import { StyledHeading } from "../common/Basics/StyledHeading";
import { StyledInput } from "../common/Basics/StyledInput";
import { StyledText } from "../common/Basics/StyledText";

const SideBarSearch = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);

  return (
    <StyledContainer
      background={Theme.colors.primaryColor}
      padding="2rem"
      borderRadius="1rem"
      width="100%"
      height="max-content"
      position="sticky"
      top="0"
    >
      <StyledHeading>Search</StyledHeading>
      <StyledFlexWrapper
        flexDirection="column"
        gap="0.5rem"
        padding=" 0 0 2rem 0"
      >
        <StyledText fontSize="1.5rem">Destination</StyledText>
        <StyledInput placeholder={destination} />
        <StyledText fontSize="1.5rem">check in date</StyledText>
        <StyledInput />
      </StyledFlexWrapper>
      <StyledText display="block" fontSize="1.5rem">
        Options
      </StyledText>

      <StyledFlexWrapper
        flexDirection="column"
        gap="2rem"
        width="100%"
        padding="1rem 0 3rem 1rem"
        alignItems="center"
      >
        <StyledFlexWrapper
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <StyledText fontSize="1.3rem">Min price (Per Night)</StyledText>{" "}
          <StyledInput type="text" padding="0.5rem" width="10rem" />
        </StyledFlexWrapper>
        <StyledFlexWrapper
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <StyledText fontSize="1.3rem">Max price (Per Night)</StyledText>{" "}
          <StyledInput type="text" padding="0.5rem" width="10rem" />
        </StyledFlexWrapper>

        <StyledFlexWrapper
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <StyledText fontSize="1.3rem">Adult</StyledText>{" "}
          <StyledInput
            type="text"
            padding="0.5rem"
            width="10rem"
            placeholder={options.Adult}
          />
        </StyledFlexWrapper>

        <StyledFlexWrapper
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <StyledText fontSize="1.3rem">Children</StyledText>{" "}
          <StyledInput
            type="text"
            padding="0.5rem"
            width="10rem"
            placeholder={options.Children}
          />
        </StyledFlexWrapper>

        <StyledFlexWrapper
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <StyledText fontSize="1.3rem">Room</StyledText>{" "}
          <StyledInput
            type="text"
            padding="0.5rem"
            width="10rem"
            placeholder={options.Room}
          />
        </StyledFlexWrapper>
      </StyledFlexWrapper>
      <StyledButton background={Theme.colors.secondaryColor} width="100%">
        Search
      </StyledButton>
    </StyledContainer>
  );
};

export default SideBarSearch;
