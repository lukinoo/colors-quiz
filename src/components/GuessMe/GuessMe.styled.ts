import styled from "styled-components";

export const SGuessMe = styled.div<{ color: string }>`
  max-width: 250px;
  height: 250px;
  width: 100%;
  background: ${({ color }) => color};
`;
