import styled from "styled-components";
import { Theme } from "../../../Theme";

export const StyledListItem = styled.li `
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color || Theme.colors.neutralColor};
  font-size: ${({ fontSize }) => fontSize || "1.4rem"};

  :hover {
    color: ${({ color }) => color || Theme.colors.secondaryColor};
  }
`;