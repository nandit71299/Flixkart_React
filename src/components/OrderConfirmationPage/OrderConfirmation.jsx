import React from "react";

import "./OrderConfirmation.css";

export default function OrderConfirmation() {
  return (
    <div className="order-confirmation-container">
      <svg
        className="order-confirmation-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2"
      >
        <circle
          className="order-confirmation-path order-confirmation-circle"
          fill="none"
          stroke="#73AF55"
          strokeWidth="6"
          strokeMiterlimit="10"
          cx="65.1"
          cy="65.1"
          r="62.1"
        />
        <polyline
          className="order-confirmation-path order-confirmation-check"
          fill="none"
          stroke="#73AF55"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10"
          points="100.2,40.2 51.5,88.8 29.8,67.5"
        />
      </svg>
      <div className="flex-container flex-column">
        <h1>Order Confirmed</h1>
        <p className="order-confirmation-para text-gray">Order Number: #534534</p>
      </div>
    </div>
  );
}
