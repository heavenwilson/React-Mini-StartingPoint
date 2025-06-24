import React, { useState } from "react";

const arrayColors = ["#a51612", "#edab56", "#b2796e", "#ff505d"];

function SetColor({ onColorChange }) {
  const [color, setColor] = useState("");

  const handleChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    onColorChange(newColor); // Added so data can be sent back up for use 
  };

  return (
    <div>
      <select onChange={handleChange}>
        {arrayColors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>
      <input value={color} readOnly />
    </div>
  );
}

export default SetColor;
