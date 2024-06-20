import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/actions";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  console.log(counter, "counter");

  return (
    <div>
      <h1>Counter : {counter} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default ReduxCounter;
