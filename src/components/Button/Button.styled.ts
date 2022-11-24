import styled from "styled-components";

export const SButton = styled.button`
  max-width: 100px;
  width: 100%;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: none;
  color: #fff;
  background: rgba(5, 5, 5, 0.2);
  border: 1px solid #fff;
  border-radius: 0.3rem;
  font-family: inherit;
  cursor: pointer;
  &:active {
    transform: scale(0.97);
  }
`;
