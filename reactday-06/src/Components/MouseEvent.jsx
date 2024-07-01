import React, { useState } from "react";

const MouseEvent = () => {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: 200,
        height: 200,
        backgroundColor: hover ? "blue" : "red",
      }}
    >
      {hover ? "Mouse is inside" : "Mouse is Outside"}
    </div>
  );
};

export default MouseEvent;
