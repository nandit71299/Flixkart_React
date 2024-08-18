import React from "react";
import "./PaymentOption.css";

import { Link } from "react-router-dom";

export default function PaymentOption({ isPaymentOptionsOpen, productId }) {
  return (
    <div
      className={`payment-option-container ${
        isPaymentOptionsOpen ? "active" : "inactive"
      } flex-container flex-column mt-3`}
    >
      <div className="flex-container align-center justify-space-between pp2 gap1 px-4 py-2">
        <div className="flex-container gap1 align-center">
          <div
            className={`btn py-1 border-rounded ${
              isPaymentOptionsOpen
                ? "bg-white text-white"
                : "bg-white text-blue"
            }`}
          >
            <h6
              className={`m0 font-small  ${
                isPaymentOptionsOpen
                  ? "bg-white text-blue"
                  : "bg-white text-blue"
              }`}
            >
              4
            </h6>
          </div>
          <div className="heading">
            <h6
              className={`m0 text-bold ${
                isPaymentOptionsOpen ? "text-white" : "text-blue"
              }`}
            >
              Payment Option
            </h6>
          </div>
        </div>
      </div>
      {isPaymentOptionsOpen && (
        <div
          className={`flex-container container-fluid px-4 py-3 align-center gap1 justify-space-between  ${
            isPaymentOptionsOpen ? "bg-white text-black" : ""
          }`}
        >
          <div className={`flex-container gap1`}>
            <input type="radio" onChange={() => {}} checked />
            <label>Cash on Delivery</label>
          </div>
          <div>
            <Link to={`/order-confirmation/${productId}`}>
              <button
                onClick={(e) => {
                  console.log(e);
                  e.stopPropagation();
                }}
                className="btn bg-warning text-white font-bold"
              >
                Place Order
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
