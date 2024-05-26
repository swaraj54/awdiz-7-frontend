import { useEffect, useState } from "react";

function UseEffect2() {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    alert("Hii");
  }, []);
  return (
    <div>
      <h1>Hi {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default UseEffect2;
