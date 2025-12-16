import { useEffect, useState, useCallback } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("");

  /*
    Increment counter and update history immediately.
    No useEffect needed for derived state.
  */
  const increment = useCallback(() => {
    setCount(prev => {
      const newCount = prev + step;
      setHistory(h => [...h, newCount]);
      setStatus("Saving...");
      return newCount;
    });
  }, [step]);

  /*
    Decrement counter and update history immediately.
  */
  const decrement = useCallback(() => {
    setCount(prev => {
      const newCount = prev - step;
      setHistory(h => [...h, newCount]);
      setStatus("Saving...");
      return newCount;
    });
  }, [step]);

  /*
    Reset counter and history
  */
  const resetCounter = () => {
    setCount(0);
    setHistory([0]);
    setStatus("");
  };

  /*
    Effect: synchronize React state with an external system (localStorage)
    This is a valid useEffect.
  */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem("count", count);
      setStatus("Changes saved.");
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [count]);

  /*
    Effect: keyboard event listeners (external system)
  */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") increment();
      if (event.key === "ArrowDown") decrement();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [increment, decrement]);

  return (
    <div className="counter-container">
      <h2>Advanced Counter</h2>

      <p className="count-display">Current Count: {count}</p>

      <div className="button-group">
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick={resetCounter}>Reset</button>
      </div>

      <div className="step-input">
        <label>Step Value:</label>
        <input
          type="number"
          min="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <p className="status-text">{status}</p>

      <h3>Count History</h3>
      <ul className="history-list">
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <p className="keyboard-hint">
        Use ArrowUp to increment and ArrowDown to decrement.
      </p>
    </div>
  );
}

export default AdvancedCounter;
