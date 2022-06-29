import styled from "styled-components";

export const StyledImage = styled.img `
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: ${({ objectFit }) => objectFit};
`;