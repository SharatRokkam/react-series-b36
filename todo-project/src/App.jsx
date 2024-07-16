import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`newItems add  ${itemName} and ${itemDueDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <TodoItem todoItems={todoItems}></TodoItem>
      </center>
    </>
  );
}

export default App;
