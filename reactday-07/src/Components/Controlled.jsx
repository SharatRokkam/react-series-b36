import React, { useState } from "react";

const Controlled = () => {
  const [inputValue, setInputValue] = useState();

  let handleInput = (e) => {
    e.preventDefault();
    alert(`Thanks form submitted successfully,  ${inputValue}`);
  };

  return (
    <>
      <form onSubmit={handleInput}>
        <label htmlFor="name">
          Name :
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </label>
        <button value="submit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Controlled;
