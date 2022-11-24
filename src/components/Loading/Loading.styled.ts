import styled, { keyframes } from "styled-components";

const loader_animation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${loader_animation} 1s linear infinite;
`;
