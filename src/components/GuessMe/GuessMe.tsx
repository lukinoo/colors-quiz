import { SGuessMe } from "./GuessMe.styled";

interface Props {
  color: string;
}

export const GuessMe: React.FC<Props> = ({ color }) => (
  <SGuessMe color={color}></SGuessMe>
);
