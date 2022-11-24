import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Loading } from "./components/Loading";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  // fetching colors data with COSTUM HOOK
  const [data, loading] = useFetch(
    import.meta.env.VITE_REACT_APP_API_URL as string
  );

  // object destructuring
  const { color, answers } = data[currentIndex] || {};

  // handle correct answers
  // const handleCorrectAnswers = (answer: string): void => {
  //   if (answer === color) {
  //     setScore((c) => c + 1);
  //   }

  //   setCurrentIndex((c) => c + 1);
  // };

  return (
    <div className="App">
      <h2>Quiz App</h2>
      {!loading ? (
        <>
          <h5>{}</h5>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
