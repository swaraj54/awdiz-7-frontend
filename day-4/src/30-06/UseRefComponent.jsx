import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [counter, setCounter] = useState(0);
  const prevCounter = useRef();
  console.log(prevCounter, "prevCounter");

  useEffect(() => {
    console.log(counter, "counter");
    prevCounter.current = counter;
  }, [counter]);
  return (
    <div>
      <h1>Previous Counter : {prevCounter.current}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default UseRefComponent;
