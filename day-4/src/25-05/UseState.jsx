import { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(10);
  console.log(counter, "counter"); /// Q. if counter 1 is more than 10 then only allow to increment counter 2.

  function Increment2() {
    console.log("Inside function");
    // setCounter(counter + 1);
    setCounter2((prevValue) => prevValue + 1);
  }

  function Decrement2() {
    if (counter2 > 1) {
      setCounter2((prevValue) => prevValue - 1);
    }
  }

  function Reset2() {
    setCounter2(10);
  }

  function Increment() {
    console.log("Inside function");
    // setCounter(counter + 1);
    setCounter((prevValue) => prevValue + 1);
  }

  function Decrement() {
    if (counter > 1) {
      setCounter((prevValue) => prevValue - 1);
    }
  }

  function Reset() {
    setCounter(1);
  }

  return (
    <div>
      <h1>Counter 1 : {counter} </h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset?</button>

      <h2>Counter 2 : {counter2} </h2>
      <button onClick={Increment2}>+</button>
      <button onClick={Decrement2}>-</button>
      <button onClick={Reset2}>Reset?</button>
    </div>
  );
}

export default UseState;
