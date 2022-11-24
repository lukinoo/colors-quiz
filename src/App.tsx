import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Loading } from "./components/Loading";
import { Quiz } from "./view/Quiz";
import { Score } from "./view/Score";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  // fetching colors data with COSTUM HOOK
  const [data, loading, fetchColors] = useFetch(
    import.meta.env.VITE_REACT_APP_API_URL as string
  );

  // object destructuring
  const { color, answers } = data[currentIndex] || {};

  // handle correct answers
  const handleCorrectAnswers = (answer: string): void => {
    if (answer === color) {
      setScore((c) => c + 1);
    }

    setCurrentIndex((c) => c + 1);
  };

  // handle reset game
  const handleResetGame = (): void => {
    fetchColors();
    setCurrentIndex(0);
    setScore(0);
  };

  return (
    <div className="App">
      {!loading ? (
        <>
          {data.length > currentIndex ? (
            <Quiz
              color={color}
              answers={answers}
              handleCorrectAnswers={handleCorrectAnswers}
            />
          ) : (
            <>
              <Score
                resetGame={handleResetGame}
                score={score}
                len={data.length}
              />
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
