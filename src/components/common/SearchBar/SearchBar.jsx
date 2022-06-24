import React, { useState } from "react";
import { StyledButton } from "../Basics/StyledButton";
import { StyledContainer } from "../Basics/StyledContainer";
import { StyledFlexWrapper } from "../Basics/StyledFlexWrapper";
import { StyledForm } from "../Basics/StyledForm";
import { StyledInput } from "../Basics/StyledInput";
import { StyledText } from "../Basics/StyledText";
import HotelIcon from "@mui/icons-material/Hotel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ManIcon from "@mui/icons-material/Man";
import { Theme } from "../../../Theme";
import DatePicker from "../DatePicker/DatePicker";

const SearchBar = ({ type }) => {
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });

  const onHandleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <>
      {type && (
        <StyledContainer padding="0">
          <StyledForm>
            <StyledFlexWrapper
              //   gap="5rem"
              justifyContent="space-between"
              padding="1.5rem 4rem"
              border="2px solid orange"
              alignItems="center"
              background={Theme.colors.neutralColor}
              position="absolute"
              width="96%"
              top="33rem"
              zIndex="999"
            >
              <StyledFlexWrapper gap="1.8rem" alignItems="center">
                <HotelIcon fontSize="large" style={{ color: "gray" }} />
                <StyledInput
                  type="text"
                  placeholder="Where are you going"
                  color={Theme.colors.tertiaryColor}
                />
              </StyledFlexWrapper>

              <StyledFlexWrapper gap="1.8rem" alignItems="center">
                <CalendarMonthIcon fontSize="large" style={{ color: "gray" }} />
                <DatePicker />
              </StyledFlexWrapper>

              <StyledFlexWrapper
                gap="1.8rem"
                alignItems="center"
                position="relative"
              >
                <ManIcon fontSize="large" style={{ color: "gray" }} />
                <StyledText
                  color={Theme.colors.tertiaryColor}
                  onClick={() => setOpenOption(!openOption)}
                  cursor="pointer"
                >
                  {`${options.Adult} Adult ${options.Children} Children ${options.Room} Room`}
                </StyledText>
                {openOption && (
                  <StyledFlexWrapper
                    flexDirection="column"
                    gap="1rem"
                    alignItems="center"
                    position="absolute"
                    top="5rem"
                    width="100%"
                    background={Theme.colors.neutralColor}
                  >
                    <StyledFlexWrapper
                      gap="0.5rem"
                      alignItems="center"
                      justifyContent="space-between"
                      width="80%"
                    >
                      <StyledText color={Theme.colors.tertiaryColor}>
                        Adult
                      </StyledText>
                      <StyledFlexWrapper gap="1rem">
                        {" "}
                        <StyledButton
                          border="1px solid gray"
                          padding="0 1rem "
                          fontSize="2rem"
                          background={Theme.colors.secondaryColor}
                          onClick={() => onHandleOption("Adult", "decrease")}
                          type="button"
                          disabled={options.Adult <= 0}
                        >
                          -
                        </StyledButton>
                        <StyledText color={Theme.colors.tertiaryColor}>
                          {options.Adult}
                        </StyledText>
                        <StyledButton
                          border="1px solid gray"
                          padding="0 0.8rem 0 0.8rem "
                          fontSize="2rem"
                          background={Theme.colors.secondaryColor}
                          onClick={() => onHandleOption("Adult", "increase")}
                          type="button"
                        >
                          +
                        </StyledButton>
                      </StyledFlexWrapper>
                    </StyledFlexWrapper>

                    <StyledFlexWrapper
                      alignItems="center"
                      justifyContent="space-between"
                      width="80%"
                    >
                      <StyledText color={Theme.colors.tertiaryColor}>
                        Children
                      </StyledText>
                      <StyledFlexWrapper
                        gap="1rem"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        {" "}
                        <StyledButton
                          border="1px solid gray"
                          padding="0 1rem "
                          fontSize="2rem"
                          disabled={options.Children <= 0}
                          background={Theme.colors.secondaryColor}
                          onClick={() => onHandleOption("Children", "decrease")}
                          type="button"
                        >
                          -
                        </StyledButton>
                        <StyledText color={Theme.colors.tertiaryColor}>
                          {options.Children}
                        </StyledText>
                        <StyledButton
                          border="1px solid gray"
                          padding="0 0.8rem 0 0.8rem "
                          fontSize="2rem"
                          background={Theme.colors.secondaryColor}
                          onClick={() => onHandleOption("Children", "increase")}
                          type="button"
                        >
                          +
                        </StyledButton>
                      </StyledFlexWrapper>
                    </StyledFlexWrapper>

                    <StyledFlexWrapper
                      gap="1rem"
                      alignItems="center"
                      justifyContent="space-between"
                      width="80%"
                    >
                      <StyledText color={Theme.colors.tertiaryColor}>
                        Room
                      </StyledText>
                      <StyledFlexWrapper gap="1rem">
                        {" "}
                        <StyledButton
                          border="1px solid gray"
                          padding="0 1rem "
                          fontSize="2rem"
                          background={Theme.colors.secondaryColor}
                          onClick={() => onHandleOption("Room", "decrease")}
                          type="button"
                          disabled={options.Room <= 0}
                        >
                          -
                        </StyledButton>
                        <StyledText color={Theme.colors.tertiaryColor}>
                          {options.Room}
                        </StyledText>
                        <StyledButton
                          border="1px solid gray"
                          padding="0 0.8rem 0 0.8rem "
                          fontSize="2rem"
                          background={Theme.colors.secondaryColor}
                          onClick={() => onHandleOption("Room", "increase")}
                          type="button"
                        >
                          +
                        </StyledButton>
                      </StyledFlexWrapper>
                    </StyledFlexWrapper>
                  </StyledFlexWrapper>
                )}
              </StyledFlexWrapper>
              <StyledButton background={Theme.colors.secondaryColor}>
                Search
              </StyledButton>
            </StyledFlexWrapper>
          </StyledForm>
        </StyledContainer>
      )}
    </>
  );
};

export default SearchBar;
