import React from "react";

import "./ProductTypeBanner.css";

export default function ProductTypeBanner(props) {
  return (
    <>
      <div className="product-type-banner-container">
        <img className="product-image" src={props.image} alt={props.title} />
        <p className="product-title">{props.title}</p>
      </div>
    </>
  );
}
