import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  // fetching colors data with COSTUM HOOK
  const [data, loading] = useFetch(
    import.meta.env.VITE_REACT_APP_API_URL as string
  );

  const { color, answers } = data[currentIndex] || [];

  // handle correct answers
  const handleCorrectAnswers = (answer: string): void => {
    if (answer === color) {
      setScore((c) => c + 1);
    }

    setCurrentIndex((c) => c + 1);
  };

  return (
    <div className="App">
      <h2>Quiz App</h2>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <h5>{5 + 3}</h5>
        </>
      )}
    </div>
  );
};

export default App;
