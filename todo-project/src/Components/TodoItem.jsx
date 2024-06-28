import React from "react";
import AddItem from "./AddItem";

const TodoItem = ({ todoItems }) => {
  return (
    <>
      <div className="item-container">
        {todoItems.map((item) => (
          <AddItem todoDate={item.date} todoName={item.name} />
        ))}
      </div>
    </>
  );
};

export default TodoItem;
