import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PriceDetails(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${props.productId}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="card border-0 rounded-0 sticky-top">
      <div className="card-header h-100 font-larger text-bold text-gray">
        Price Details
      </div>
      <div className="card-body">
        <div className="flex-container flex-column gap-1">
          <div className="flex-container gap-3 justify-space-between align-center">
            <h5 className="card-title font-small">Price (1 Item)</h5>
            <h5 className="font-small"> ₹ {data.price}</h5>
          </div>
          <div className="flex-container justify-space-between">
            <h5 className="card-title font-small">Delivery Charges</h5>
            <h5 className="text-green font-small"> FREE</h5>
          </div>
        </div>
        <hr className="border-bottom text-gray m0 my-2" />
        <div className="flex-container justify-space-between">
          <h5 className="card-title">Total Payable</h5>
          <h5 className="">₹ {data.price}</h5>
        </div>
      </div>
    </div>
  );
}
