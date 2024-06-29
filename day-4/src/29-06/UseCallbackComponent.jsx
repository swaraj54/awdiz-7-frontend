import React, { memo, useCallback, useState } from "react";

const UseCallbackComponent = () => {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState("");
  console.log(data, "data");

    const Increment = () => {
      setCounter((prevValue) => prevValue + 1);
    };

//   const Increment = useCallback(() => {
//     setCounter((prevValue) => prevValue + 1);
//   }, []);

  return (
    <div>
      <input onChange={(event) => setData(event.target.value)} />
      <MemoComponent counter={counter} Increment={Increment} />
    </div>
  );
};

const MemoComponent = memo(function ChildrenComponent({ counter, Increment }) {
  console.log("Children Component rerendered.");
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={Increment}>+</button>
    </div>
  );
});

export default UseCallbackComponent;
