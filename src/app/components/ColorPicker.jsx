import { getColorValue } from "@/utils/colorMap";
import React from "react";

const ColorPicker = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          className={`color-option ${selectedColor === color ? "active" : ""}`}
          style={{
            border: selectedColor === color ? "1px solid black" : "none",
            borderRadius: "50%",
            width: "28px",
            height: "28px",
            cursor: "pointer",
            margin: "4px",
            position: "relative",
          }}
          onClick={() => onColorChange(color)}
          aria-label={`Select ${color} color`}
        >
          <div
            style={{
              backgroundColor: getColorValue(color),
              borderRadius: "50%",
              width: "18px",
              height: "18px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </button>
      ))}
      <p className="avenir-book text-[12px]">
        {capitalize(selectedColor)} Gold
      </p>
    </div>
  );
};

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default ColorPicker;
