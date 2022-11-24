import styled from "styled-components";

export const SQuiz = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  h2 {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #f3ec78;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  .quiz-button__wrapper {
    display: flex;
    gap: 2rem;
  }
`;
