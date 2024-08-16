import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DealsBanner.css"; // Import the CSS file
import HorizontalProductListing from "../../UIElements/HorizontalProductListing";

export default function DealsBanner() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    }

    getData();
  }, []);

  return (
    <HorizontalProductListing
      listingTitle="Best Sellers on Fashion"
      data={products}
      loading={loading} // Pass loading state to HorizontalProductListing
      sidebarImage={
        "https://rukminim2.flixcart.com/www/540/880/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60"
      }
    />
  );
}
