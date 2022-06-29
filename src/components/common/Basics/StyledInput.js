import styled from "styled-components";

export const StyledInput = styled.input `
  outline: none;
  border: ${({ border }) => border || "none"};
  padding: ${({ padding }) => padding || "1rem"};
  font-size: ${({ fontSize }) => fontSize || "1.8rem"};
  width: ${({ width }) => width || "100%"};
  border-radius: ${({ borderRadius }) => borderRadius || "0.5rem"};
`;