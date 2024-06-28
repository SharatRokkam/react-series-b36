import React from "react";

const AddItem = ({ todoDate, todoName }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
