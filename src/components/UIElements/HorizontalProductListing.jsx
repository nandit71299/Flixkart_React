import React from "react";
import "./HorizontalProductListing.css";

export default function HorizontalProductListing(props) {
  return (
    <div className="horizontalProductListing">
      <div
        className="horizontalProductListing-content"
        style={props.sidebarImage ? {} : { width: "100%" }}
      >
        {props.listingTitle && (
          <h4 className="horizontalProductListing-title mtp5">
            {props.listingTitle}
          </h4>
        )}
        <div className="horizontalProductListing-products-container">
          {props.loading
            ? // Show skeleton loaders while data is loading
              Array.from({ length: 5 }).map((_, index) => (
                <div
                  className="horizontalProductListing-products-product-card skeleton"
                  key={index}
                >
                  <div className="horizontalProductListing-products-product-image-wrapper">
                    <div className="skeleton-loader skeleton-image" />
                  </div>
                  <div className="horizontalProductListing-products-product-detail">
                    <div className="skeleton-loader skeleton-title" />
                    <div className="skeleton-loader skeleton-price" />
                  </div>
                </div>
              ))
            : // Display actual product data
              props.data.map((product) => (
                <a
                  href={`/product/${product.id}`}
                  className="text-decoration-none text-black m0"
                  key={product.id}
                >
                  <div className="horizontalProductListing-products-product-card">
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
                </a>
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
