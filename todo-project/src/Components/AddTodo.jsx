import { useState } from "react";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-6">
            <input
              type="text"
              value={todoName}
              placeholder="enter your task"
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button className="btn btn-success" onClick={handleButtonClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
