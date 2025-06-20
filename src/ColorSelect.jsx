import { useState } from "react";

function ColorSelect() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColor = (event) => {
    setColor(event.target.value);
  };
  return (
    <div className="color-pick-container">
      <h1>Color Select</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color : {color}</p>
      </div>
      <label>Choose a color : </label>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  );
}

export default ColorSelect;
