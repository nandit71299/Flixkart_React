import React from "react";
import { useParams } from "react-router-dom";

import Product from "../components/ProductPage/Product";
import "./ProductPage.css";

export default function ProductPage() {
  const { id: productId } = useParams();
  return (
    <div className="product-page-background">
      <Product productId={productId} />
    </div>
  );
}
