import { useState } from "react";
function FunctionProp() {
  function HandleClick() {
    console.log("Clicked.");
  }
  return (
    <div>
      <h1>FunctionProp</h1>
      <ChildrenComponent buttonValue="Click me!" HandleClick={HandleClick} />
    </div>
  );
}

function ChildrenComponent({ buttonValue, HandleClick }) {
  return <button onClick={HandleClick}>{buttonValue}</button>;
}

// function FunctionProp() {
//   const [counter, setCounter] = useState(1);
//   function Increment() {
//     setCounter(counter + 1);
//   }
//   return (
//     <div>
//       <h1> Counter : {counter}</h1>
//       <ChildrenComponent Increment={Increment} />
//     </div>
//   );
// }

// function ChildrenComponent({ Increment }) {
//   return <button onClick={Increment}>+</button>;
// }

export default FunctionProp;
