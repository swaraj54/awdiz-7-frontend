import React, { useMemo, useState } from "react";

const UseMemoComponent = () => {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState(0);
    const expCount = ExpensiveCalculation(counter);
//   const expCount = useMemo(() => ExpensiveCalculation(counter), [counter]);
  return (
    <div>
      <input onChange={(event) => setData(event.target.value)} />
      <h1>Expensive Calculation Count : {expCount}</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

function ExpensiveCalculation(counter) {
  console.log("Calculating expensive calculcation.");
  var totalCount = 0;
  for (var i = 0; i < 1000000000; i++) {
    totalCount += counter;
  }
  return totalCount;
}

export default UseMemoComponent;
