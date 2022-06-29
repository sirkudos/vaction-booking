import styled from "styled-components";
import { Theme } from "../../../Theme";

export const StyledText = styled.span `
  display: ${({ display }) => display || "inline-block"};
  color: ${({ color }) => color || Theme.colors.neutralColor};
  font-size: ${({ fontSize }) => fontSize || "1.8rem"};
  cursor: ${({ cursor }) => cursor};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  font-family: ${({ fontFamily }) => fontFamily};
  text-decoration: ${({ textDecoration }) => textDecoration};
  font-weight: ${({ fontWeight }) => fontWeight};
`;