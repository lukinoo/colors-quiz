import { SButton } from "./Button.styled";

interface Props {
  children: React.ReactNode;
  isCorrectAnswer?: () => void;
}

export const Button: React.FC<Props> = ({ children, isCorrectAnswer }) => (
  <SButton onClick={isCorrectAnswer}>{children}</SButton>
);
