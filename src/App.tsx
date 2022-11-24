import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // https://random-colors-lovat.vercel.app/

  return (
    <div className="App">
      <h2>hello, world {count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <button onClick={() => setCount((c) => c - 1)}>decrement</button>
    </div>
  );
};

export default App;
