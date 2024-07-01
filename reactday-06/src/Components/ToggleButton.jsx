// Create a button and onClick of the button you should render text as "ON" or "OFF", use ternary operator to execute  the condition

import React, { useState } from "react";
import FormEvent from "./FormEvent";

const ToggleButton = () => {
  const [isON, setIsON] = useState(false);

  return (
    <>
      <button onClick={() => setIsON(!isON)}>{isON ? <FormEvent /> : "OFF"}</button>
    </>
  );
};

export default ToggleButton;
