import { useEffect, useState, useEffectEvent } from "react";

export function ExampleUseEffectandUseEffectEvent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("hello");

  console.log("count from console", count);
  //   useEffect(() => {
  //     console.log(`Count changed: ${count}`);
  //   }, [count]); // Effect re-runs whenever `count` changes.
  const handleClick = useEffectEvent(() => {
    console.log(`Count from useeffectevent is: ${count}`); // Always gets the latest `count`.
  });

  const hello = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment via useEffect
      </button>
      <button onClick={handleClick}>Increment via useEffectEvent</button>
      Updated Count - {count}
      <input type="text" onChange={hello} />
      <div>Updated Text - {text}</div>
    </>
  );
}
