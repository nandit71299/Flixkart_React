import React, { useState, useEffect } from "react";
import "./HorizontalProductListing.css";

export default function HorizontalProductListing(props) {
  return (
    <div className="horizontalProductListing">
      <div
        className="horizontalProductListing-content"
        style={props.sidebarImage ? {} : { width: "100%" }}
      >
        {props.listingTitle && (
          <h4 className="horizontalProductListing-title">
            {props.listingTitle}
          </h4>
        )}
        <div className="horizontalProductListing-products-container">
          {props.data.map((product) => (
            <div
              key={product.id}
              className="horizontalProductListing-products-product-card"
            >
              <div className="horizontalProductListing-products-product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="horizontalProductListing-products-product-image"
                />
              </div>
              <div className="horizontalProductListing-products-product-detail">
                <p className="horizontalProductListing-products-product-title">
                  {product.title}
                </p>
                <strong className="horizontalProductListing-products-product-price">
                  From ₹{product.price}
                </strong>
              </div>
            </div>
          ))}
        </div>
      </div>
      {props.sidebarImage && (
        <div className="horizontalProductListing-sidebarImageWrapper">
          <img src={props.sidebarImage} alt="Hero Offer" />
        </div>
      )}
    </div>
  );
}
