import React, { useState } from "react";

import "./ProductImage.css";

export default function ProductImage(props) {
  const { data: images = [] } = props; // Set default value to an empty array
  const [selectedImage, setSelectedImage] = useState(
    images.length > 0 ? images[0] : "https://i.sstatic.net/kOnzy.gif"
  );

  function handleMouseEnter(index) {
    setSelectedImage(images[index]);
  }

  function handleMouseExit() {
    if (images.length > 0) {
      setSelectedImage(images[0]);
    }
  }

  function handleClick(index) {
    setSelectedImage(images[index]);
    console.log(selectedImage);
  }

  return (
    <div className="product-image-container">
      <div className="product-image-strip-column">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product image ${index + 1}`} // Provide meaningful alt text
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseExit}
            onClick={() => handleClick(index)}
            className="product-strip-images" // Optional: indicate images are clickable
          />
        ))}
      </div>
      <div className="product-main-image-container">
        <img
          src={selectedImage}
          alt="Selected product"
          className="product-main-image"
        />{" "}
        {/* Display the selected image */}
      </div>
    </div>
  );
}
