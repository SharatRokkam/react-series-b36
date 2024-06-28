import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";

function App() {
  const todoItems = [
    { name: "Learn React", date: "23/2/22" },
    { name: "Learn Javascript", date: "23/2/22" },
    { name: "Go to swimming", date: "23/2/22" },
    { name: "Play basketball", date: "23/2/22" },
  ];
  return (
    <>
      <center className="container">
        <AppName />
        <AddTodo />
        <TodoItem todoItems={todoItems}></TodoItem>
      </center>
    </>
  );
}

export default App;
