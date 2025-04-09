"use client";

import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import PopularityStars from "./PopularityStars";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(
    Object.keys(product.images)[0]
  );

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="product-card text-left flex flex-col gap-3">
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        className="rounded-2xl"
      />
      <p className="montserrat-medium text-[15px]">{product.name}</p>
      <p className="montserrat-regular text-[15px]">${product.price} USD</p>
      <ColorPicker
        colors={Object.keys(product.images)}
        selectedColor={selectedColor}
        onColorChange={handleColorChange}
      />
      <PopularityStars score={product.popularityScore} />
    </div>
  );
};

export default ProductCard;
