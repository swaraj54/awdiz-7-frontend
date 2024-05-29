import { useEffect, useState } from "react";

function UseEffect3() {
  const [counter, setCounter] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // true
  function SwitchFlag() {
    setIsUserLoggedIn((prevState) => !prevState); // false => !false => true   // true => !true => false
  }

  //   if( codition) {
  //     statement 1
  //   } else {
  //     statement 2
  //   }

  function Increment() {
    setCounter(counter + 1);
  }
  //   useEffect(() => {
  //     alert("Calling from useeffect.");
  //   }, [counter]);

  useEffect(() => {
    alert("Calling from useeffect.");
  }, [counter, isUserLoggedIn]);
  return (
    <div>
        
        {/* Assigment && -> if counter is more than 10 and less than 20 then display "counter is in between 10-20" else display "counter is out of range". */}
      {/* {condition ? 1st statement : 2nd statement } */}
      {isUserLoggedIn ? (
        <button onClick={SwitchFlag}>Welcome! Logout?</button>
      ) : (
        <button onClick={SwitchFlag}>Please login!</button>
      )}
      <h1>Counter : {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default UseEffect3;
