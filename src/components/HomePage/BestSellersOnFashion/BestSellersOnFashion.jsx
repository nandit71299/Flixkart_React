import React, { useEffect, useState } from "react";
import axios from "axios";

import HorizontalProductListing from "../../UIElements/HorizontalProductListing";

export default function BestSellersOnFashion() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false even if there's an error
      }
    }
    getData();
  }, []);

  return (
    <div style={{ paddingTop: "20px" }}>
      <HorizontalProductListing
        data={products}
        loading={loading}
        listingTitle="Best Sellers on Fashion"
      />
    </div>
  );
}
