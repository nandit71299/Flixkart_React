import React, { useEffect, useState } from "react";
import axios from "axios";

import HorizontalProductListing from "../../UIElements/HorizontalProductListing";

export default function BestSellersOnFashion() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <HorizontalProductListing
        data={products}
        listingTitle="Best Sellers on Fashion"
      />
    </div>
  );
}
