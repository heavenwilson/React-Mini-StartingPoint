import React, { useState } from "react";

const arrayColors = ["#a51612", "#edab56", "#b2796e", "#ff505d"];

function chooseColor() {
  const [color, setColor] = useState("");

  const handleChange = (event) => {
    setColor(event.target.value);
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
      <input value={color} readOnly></input>
    </div>
  );
}

export default chooseColor;
