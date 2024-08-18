import React from "react";

import "./CheckoutPage.css";
import Checkout from "../components/CheckoutPage/Checkout";

export default function CheckoutPage(props) {
  return (
    <div className="container-fluid product-page-background">
      <Checkout />
    </div>
  );
}
