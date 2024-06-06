import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  console.log(allTodos, "allTodos");
  function handleChange(event) {
    setTodo(event.target.value);
  }
  function handleSubmit() {
    setAllTodos([...allTodos, todo]);
    setTodo("");
  }
  function deleteTodo(index) {
    const taskcopy = [...allTodos];
    taskcopy.splice(index, 1);
    setAllTodos(taskcopy);
  }
  return (
    <div>
      <h1>Todo</h1>
      <input value={todo} onChange={handleChange} />
      <br />
      <button onClick={handleSubmit}>Submit Todo.</button>
      <h1>All Todos.</h1>
      {allTodos.map((todo, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            width: "50%",
            margin: "auto",
            justifyContent: "space-around",
          }}
        >
          <p>
            {" "}
            {i + 1}. {todo}
          </p>
          <button onClick={() => deleteTodo(i)}>Delete.</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
