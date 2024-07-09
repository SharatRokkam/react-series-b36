import React, { useState } from "react";

const BgChanger = () => {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = () => {
    let colors = ["red", "blue", "green", "pink", "black", "yellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <>
      <div onClick={changeColor} style={{ backgroundColor: bgColor, width: '100vw', height: '100vh' }}>
        Click me to change the background Color
      </div>
    </>
  );
};

export default BgChanger;
