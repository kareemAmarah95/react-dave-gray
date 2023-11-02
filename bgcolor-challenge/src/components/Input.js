import React, { useState, useRef, useEffect } from "react";
import BgColorVal from "./BgColorVal";

const Input = () => {
  const [input, setInput] = useState("");
  const [squareColor, setSquareColor] = useState("");
  const changeBgColor = (e) => {
    setInput(e.target.value);
    updateSquareColor(e.target.value);
  };

  const updateSquareColor = (value) => {
    console.log(value);
    // Define your logic to determine the square color based on the input value
    // For example, let's say the input value should be a valid CSS color name
    const isValidColor =
      /^(#([0-9A-F]{3}){1,2}|(rgb|hsl)a?\(\s*(-?\d+%?\s*,\s*){2,3}[^,)]*?\)\s*|([a-z]+))$/i.test(
        value
      );
    console.log(isValidColor);
    if (isValidColor) {
      setSquareColor(value);
    } else {
      // Set a default color if the input value is not valid
      setSquareColor("#ffffff");
    }
  };

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div style={{ backgroundColor: squareColor }} className="bgColorVal">
        Empty Value
      </div>

      <input
        ref={inputRef}
        value={input}
        type="text"
        onChange={changeBgColor}
        placeholder="Add color name"
      />
    </>
  );
};

export default Input;
