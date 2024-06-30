import React, { useRef, useState } from "react";

const UseRef2Component = () => {
  const counterRef = useRef(0);
  const [counter, setCounter] = useState(10);
  function Increment() {
    counterRef.current++;
    console.log("current counter", counterRef.current);
  }
  return (
    <div>
      <h1>State counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Counter : {counterRef.current}</h1>
      <button onClick={Increment}>+</button>
    </div>
  );
};

export default UseRef2Component;
