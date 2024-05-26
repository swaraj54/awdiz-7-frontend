import { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  // state
  // fuctions
  // effects
  useEffect(() => {
    alert("INside useeffect.");
    //  backend call to fetch product
  });

  //   window.onload = userStartedBrowsing();
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ for 2</button>
      <h2>Useefecct</h2>
    </div>
  );
}

export default UseEffect;
