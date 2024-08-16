import React from "react";
import { useParams } from "react-router-dom";
import Product from "../components/ProductPage/Product";

export default function ProductPage() {
  const { id: productId } = useParams();
  return <Product productId={productId} />;
}
