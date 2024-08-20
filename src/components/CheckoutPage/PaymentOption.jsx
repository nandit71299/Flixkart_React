import React, { useState } from "react";
import axios from "axios";
import "./PaymentOption.css";
const env = import.meta.env;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function PaymentOption({ isPaymentOptionsOpen, productId }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }

    const data = await fetch("http://localhost:3000/create-order", {
      method: "POST",
    }).then((t) => t.json());

    const options = {
      key: env.VITE_RZP_ID, // Enter the Key ID generated from the Dashboard
      amount: data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      // image: "https://example.com/your_logo",
      order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:3000/order-confirmation/",
      notes: {
        address: "Test",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

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
              className={`m0 font-small ${
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
          className={`flex-container container-fluid px-4 py-3 align-center gap1 justify-space-between ${
            isPaymentOptionsOpen ? "bg-white text-black" : ""
          }`}
        >
          <div className="flex-container gap1">
            <input type="radio" onChange={() => {}} checked />
            <label>Razorpay</label>
          </div>
          <div>
            <button
              onClick={displayRazorpay}
              className="btn bg-warning text-white font-bold"
              disabled={loading}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
            {error && <p className="text-danger">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
