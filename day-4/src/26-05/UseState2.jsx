import { useState } from "react";

function UseState2() {
  const [counter, setCounter] = useState(1);

  // forms login register newsletter

  function Increment() {
    setCounter(counter + 1);
  }

  function Decrement() {
    setCounter(counter - 1);
  }



  return (
    <div>
      <h1>Use state </h1>
      <h2>Counter : {counter} </h2>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
}

export default UseState2;
