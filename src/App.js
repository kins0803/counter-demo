import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(currentVal => currentVal + 1)
  }
  const decrement = () => {
    if (counter === 0) return
    setCounter(currentVal => currentVal - 1)
  }

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
