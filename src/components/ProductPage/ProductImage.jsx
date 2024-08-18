import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="flex-container gapp5 w100 ptp5">
          <button className="w100 btn bg-orange text-bold text-white pp5 font-small">
            <svg
              className="NwyjNT"
              width="16"
              height="16"
              viewBox="0 0 16 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className=""
                d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                fill="#fff"
              ></path>
            </svg>
            &nbsp;Add To Cart
          </button>
          <Link
            // className="w100 btn text-bold text-white font-small bg-reddish-orange pp5"
            to={`/checkout/${props.productId}`}
            className="text-decoration-none text-white w100 btn text-bold text-white font-small bg-reddish-orange pp5"
          >
            <button className="w100 btn text-bold text-white font-small bg-reddish-orange pp5">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMHY3LjdoMi4xVjE0TDcgNS42SDQuMkw3IDAiIGZpbGw9IiNGRkYiLz48L3N2Zz4="
                alt=""
              />
              BUY NOW
            </button>
          </Link>
        </div>
        {/* Display the selected image */}
      </div>
    </div>
  );
}
