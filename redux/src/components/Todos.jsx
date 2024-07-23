import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <button onClick={() => dispatch(removeTodo(todo.id))}>Del</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
