import axios from "axios";
import React, { useEffect, useState } from "react";
import "./OrderSummary.css";

export default function OrderSummary({
  isOrderSummaryOpen,
  handleOrderTab,
  handlePaymentTab,
  productId,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  function handleChange(e) {
    const action = e.target.name;

    if (action === "plus") {
      setCount((prev) => prev + 1);
    } else {
      if (count === 0) {
        return;
      } else {
        setCount((prev) => prev - 1);
      }
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    }
    getData();
  }, [productId]);

  return (
    <div
      className={`order-summary-container ${
        isOrderSummaryOpen ? "active" : "inactive"
      } flex-container flex-column mt-3 bg-white`}
    >
      <div className="bg-blue flex-container align-center justify-space-between pp2 gap1 px-4 py-2">
        <div className="flex-container gap1 align-center">
          <div className="btn py-1 border-rounded bg-white">
            <h6 className="m0 text-blue font-small">3</h6>
          </div>
          <div className="text-white">
            <h6 className="m0 text-bold">Order Summary</h6>
          </div>
        </div>
        <div>
          <button
            className="font-large text-white m0 btn"
            onClick={handleOrderTab}
          >
            Change
          </button>
        </div>
      </div>
      {isOrderSummaryOpen && (
        <div className="flex-container">
          {loading ? (
            <div className="w-100 h-100 py-4 px-4">
              <div
                className="horizontalProductListing-products-product-card skeleton"
                key={1}
              >
                <div className="horizontalProductListing-products-product-image-wrapper">
                  <div className="skeleton-loader skeleton-image" />
                </div>
                <div className="horizontalProductListing-products-product-detail">
                  <div className="skeleton-loader skeleton-title" />
                  <div className="skeleton-loader skeleton-price" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-container">
              <div className="flex-container flex-column align-center">
                <img
                  src={data.images[0]}
                  alt=""
                  style={{
                    height: "200px",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
                <div className="flex-container mx-3 my-2">
                  <button
                    name="minus"
                    onClick={handleChange}
                    className={
                      "btn border-1 border rounded-circle m0" +
                      (count < 1 ? " disabled text-white" : "")
                    }
                  >
                    -
                  </button>
                  <input
                    name="plus"
                    type="text"
                    style={{ width: "50px", textAlign: "center" }}
                    className="border mx-2"
                    value={count}
                    onChange={() => {}}
                  />
                  <button
                    className="btn border-1 border rounded-circle m0"
                    onClick={handleChange}
                    name="plus"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex-container flex-column px-5">
            <p className="font-larger pt-4 m0">{data.title}</p>
            <p className="text-gray pt-2">{data.brand}</p>
            <p className="font-larger fw-bold">
              ₹ {data.price} &nbsp;&nbsp;&nbsp;
              <span className="text-green font-small">
                {data.discountPercentage}% Off
              </span>
            </p>
            <p className="text-gray">{data.description}</p>
          </div>
          <div className="flex-container flex-column w-100 py-4 px-4">
            <p>
              {data.shippingInformation} |{" "}
              <span className="text-green">Free</span>
            </p>
            <div className="flex-container gap1">
              <img
                src="https://rukminim2.flixcart.com/www/200/200/promos/10/08/2020/8ed1a6e7-6892-41e9-b208-75f043e1c258.png?q=90"
                alt=""
                className="img-fluid"
                style={{ maxHeight: "30px" }}
              />
              <p className="text-bold font-small">
                Open Box Delivery is eligible for this item. You will receive a
                confirmation post payment.
              </p>
            </div>
            <div>
              <button
                className="btn bg-warning w-100 text-white"
                onClick={handlePaymentTab} // Opens Payment Option tab
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
