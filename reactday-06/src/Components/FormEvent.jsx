//Create a form with input text that displays the current value below it...
import React, { useState } from "react";

const FormEvent = () => {
  const [text, setText] = useState("");

  
  const inputValue = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={text}
        // avoid passing the functions inline
        onChange={inputValue}
      />
      <h3>Current Text : {text}</h3>
    </>
  );
};

export default FormEvent;


