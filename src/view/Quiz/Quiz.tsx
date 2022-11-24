import { Button } from "../../components/Button";
import { GuessMe } from "../../components/GuessMe";
import { SQuiz } from "./Quiz.styled";

interface Props {
  color: string;
  answers: Array<string>;
  handleCorrectAnswers: (answer: string) => void;
}

export const Quiz: React.FC<Props> = ({
  color,
  answers,
  handleCorrectAnswers,
}) => {
  return (
    <SQuiz>
      <h2>Quiz App</h2>
      <GuessMe color={color} />
      <div className="quiz-button__wrapper">
        {(answers || []).map((answer) => {
          return (
            <Button
              isCorrectAnswer={() => handleCorrectAnswers(answer)}
              key={answer}
            >
              {answer}
            </Button>
          );
        })}
      </div>
    </SQuiz>
  );
};
