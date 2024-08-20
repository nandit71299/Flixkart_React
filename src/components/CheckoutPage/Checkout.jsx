import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Login from "./Login";
import Delivery from "./Delivery";
import OrderSummary from "./OrderSummary";
import PaymentOption from "./PaymentOption";
import PriceDetails from "./PriceDetails";
import "./Checkout.css";

export default function Checkout() {
  const [isLoginOpen, setLoginOpen] = useState(true);
  const [isDeliveryAddressOpen, setDeliveryAddressOpen] = useState(false);
  const [isOrderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [isPaymentOptionsOpen, setPaymentOptionsOpen] = useState(false);

  const handleChangeClick = () => {
    setLoginOpen(true);
    setDeliveryAddressOpen(false);
    setOrderSummaryOpen(false);
    setPaymentOptionsOpen(false);
  };

  const handleDeliveryTab = () => {
    setLoginOpen(false);
    setDeliveryAddressOpen(true);
    setOrderSummaryOpen(false);
    setPaymentOptionsOpen(false);
  };

  const handleOrderTab = () => {
    setLoginOpen(false);
    setDeliveryAddressOpen(false);
    setOrderSummaryOpen(true);
    setPaymentOptionsOpen(false);
  };

  const handlePaymentTab = (event) => {
    event.preventDefault();
    setLoginOpen(false);
    setDeliveryAddressOpen(false);
    setOrderSummaryOpen(false);
    setPaymentOptionsOpen(true);
  };

  const { id: productId } = useParams();

  return (
    <div
      className="container-fluid flex-container checkout-page-container gap1 py-3"
      style={{ flexWrap: "wrap" }}
    >
      <div className="checkout-page-form-container">
        {/* Pass the state and handler to each component */}
        <Login
          isLoginOpen={isLoginOpen}
          handleChangeClick={handleChangeClick}
          handleDeliveryTab={handleDeliveryTab}
        />
        <Delivery
          isDeliveryAddressOpen={isDeliveryAddressOpen}
          handleDeliveryTab={handleDeliveryTab}
          handleOrderTab={handleOrderTab}
        />
        <OrderSummary
          isOrderSummaryOpen={isOrderSummaryOpen}
          handleOrderTab={handleOrderTab}
          productId={productId}
          handlePaymentTab={handlePaymentTab}
        />
        <PaymentOption
          isPaymentOptionsOpen={isPaymentOptionsOpen}
          handlePaymentTab={handlePaymentTab}
          productId={productId}
        />
      </div>
      <div className="checkout-page-price-details-container">
        <PriceDetails productId={productId} />
      </div>
    </div>
  );
}
