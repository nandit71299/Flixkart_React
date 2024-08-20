import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import qs from "qs"; // Import qs

import "./OrderConfirmation.css";
export default function OrderConfirmation() {
  const location = useLocation();
  const [paymentStatus, setPaymentStatus] = useState(null);

  const { payment_id } = useParams();
  useEffect(() => {
    console.log(payment_id);

    const verifyPayment = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/verify-payment",
          qs.stringify({ payment_id }), // Encode the data
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded", // Set the correct header
            },
          }
        );
        console.log(response);
        if (response.data.success) {
          setPaymentStatus("success");
        } else {
          setPaymentStatus("failed");
        }
      } catch (error) {
        console.error("Verification failed", error);
        setPaymentStatus("failed");
      }
    };

    verifyPayment();
  }, [location]);

  return (
    <div>
      {paymentStatus === "success" ? (
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
            <p className="text-gray text-center">Order Number: #534534</p>
          </div>
        </div>
      ) : paymentStatus === "failed" ? (
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
              stroke="#D06079"
              strokeWidth="6"
              strokeMiterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <line
              className="order-confirmation-path order-confirmation-line"
              fill="none"
              stroke="#D06079"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="34.4"
              y1="37.9"
              x2="95.8"
              y2="92.3"
            />
            <line
              class="order-confirmation-path order-confirmation-line"
              fill="none"
              stroke="#D06079"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="95.8"
              y1="38"
              x2="34.4"
              y2="92.2"
            />
          </svg>
          <div className="flex-container flex-column">
            <h1 className="text-danger">Order can not be Confirmed</h1>
            <p className="text-gray text-center">Payment Id: {payment_id}</p>
          </div>
        </div>
      ) : (
        <p>Verifying payment...</p>
      )}
    </div>
  );
}
