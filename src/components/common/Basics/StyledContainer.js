import styled from "styled-components";

export const StyledContainer = styled.div `
  padding: ${({ padding }) => padding || "0 3rem"};
  background-color: ${({ background }) => background};
  border: ${({ border }) => border};
  width:${({ width }) => width}
  position: ${(position) => position};
  overflow: "hidden";
`;