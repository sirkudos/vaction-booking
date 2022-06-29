import styled from "styled-components";

export const StyledButton = styled.button `
  outline: none;
  border: ${({ border }) => border || "none"};
  padding: ${({ padding }) => padding || "1rem"};
  font-size: ${({ fontSize }) => fontSize || "1.8rem"};
  background-color: ${({ background }) => background};
  color: ${({ color }) => color || "#fff"};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
`;