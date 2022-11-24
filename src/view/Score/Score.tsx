import { SScore, SScoreResetBtn } from "./Score.styled";

interface Props {
  score: number;
  len: number;
  resetGame: () => void;
}

export const Score: React.FC<Props> = ({ len, score, resetGame }) => {
  return (
    <SScore>
      <h3>
        Your score is {score}/{len} 🔥
      </h3>
      <SScoreResetBtn onClick={resetGame}>Reset</SScoreResetBtn>
    </SScore>
  );
};
