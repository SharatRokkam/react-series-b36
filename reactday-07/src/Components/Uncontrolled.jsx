import React, { useRef } from "react";

const UnControlled = () => {
  const inputRef = useRef(null);

  let handleInput = (e) => {
    e.preventDefault();
    alert(`Thanks form submitted successfully,  ${inputRef.current.value}`);
  };

  return (
    <>
      <form onSubmit={handleInput}>
        <label> Name :</label>
        <input type="text" ref={inputRef} />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default UnControlled;
