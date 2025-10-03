import React, { useState } from "react";
import { colors } from "./colors";

const Button = ({ text = "Click me", initialColor = "#0000FF", style }) => {
  const [color, setColor] = useState(initialColor);

  const randomColor = Math.floor(Math.random() * colors.length);

  const changeColor = () => {
    setColor(randomColor);
  };

  return (
    <button
      style={{ backgroundColor: color, ...style }}
      onClick={changeColor}
    >
      {text}
    </button>
  );
};

export default Button;
