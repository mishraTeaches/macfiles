import React, { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0); // Displayed time
  const timerRef = useRef(null); // Holds the timer ID, does not cause re-renders

  const startTimer = () => {
    if (timerRef.current) return; // Prevent multiple intervals
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000); // Increment time every second
  };

  const stopTimer = () => {
    clearInterval(timerRef.current); // Clear the timer
    timerRef.current = null; // Reset the ref
  };

  const resetTimer = () => {
    stopTimer(); // Stop the timer
    setTime(0); // Reset the displayed time
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const startButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4CAF50",
    color: "white",
  };

  const stopButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336",
    color: "white",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#008CBA",
    color: "white",
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Stopwatch</h1>
      <h2>{time} seconds</h2>
      <button
        onClick={startTimer}
        style={startButtonStyle}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Start
      </button>
      <button
        onClick={stopTimer}
        style={stopButtonStyle}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Stop
      </button>
      <button
        onClick={resetTimer}
        style={resetButtonStyle}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
