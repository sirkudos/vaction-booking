import styled from "styled-components";
import { Theme } from "../../../Theme";
export const StyledHeading = styled.h1 `
  color: ${({ color }) => color || Theme.colors.neutralColor};
  font-size: ${({ fontSize }) => fontSize || "2rem"};
`;