import { SScore } from "./Score.styled";

interface Props {
  score: number;
  len: number;
}

export const Score: React.FC<Props> = ({ len, score }) => {
  return (
    <SScore>
      Your score is {score}/{len} 🔥
    </SScore>
  );
};
