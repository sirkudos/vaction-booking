import styled from "styled-components";

export const StyledFlexWrapper = styled.div `
  display: flex;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  background-color: ${({ background }) => background};
  gap: ${({ gap }) => gap};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  z-index: ${({ zIndex }) => zIndex};
  min-width: ${({ minWidth }) => minWidth};
`;