import { margin } from "@mui/system";
import styled from "styled-components";

export const StyledList = styled.ul `
  padding: ${({ padding }) => padding || "0rem"};
  margin: ${({ margin }) => margin || "0rem"};
  list-style-type: none;
`;