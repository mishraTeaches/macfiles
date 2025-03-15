import React, { useState, useCallback, useMemo } from "react";

const NumberList = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [showEven, setShowEven] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // useMemo to compute filtered numbers only when `numbers` or `showEven` changes.
  const filteredNumbers = useMemo(() => {
    console.log("Filtering numbers...");
    return showEven ? numbers.filter((num) => num % 2 === 0) : numbers;
  }, [numbers, showEven]);

  // useCallback to memoize the toggle function.
  const toggleShowEven = () => {
    console.log("callback called on rerendering");
    setShowEven((prevShowEven) => !prevShowEven);
  };

  // Button click handler, not memoized as it doesn’t depend on props/state.
  const incrementClickCount = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Number List</h1>
      <p>Click count: {clickCount}</p>
      <button onClick={incrementClickCount}>Increment Click Count</button>
      <button onClick={toggleShowEven}>
        {showEven ? "Show All Numbers" : "Show Even Numbers"}
      </button>
      <ul>
        {filteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
