import React, { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import axios from "axios";

import "./Product.css";
import Loader from "../UIElements/Loader";

export default function Product(props) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${props.productId}`
        );
        setProduct(response.data);
        console.log(product);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [props.productId]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Error: Product not found</div>; // Handle case where no product is found
  }
  console.log(product);
  return (
    <div className="product-page-container">
      <div className="product-page-image-container">
        {product.images && product.images.length > 0 ? (
          <ProductImage data={product.images} />
        ) : (
          <div>No images available</div>
        )}
      </div>
      <div className="product-page-product-details-container w100 flex-container justify-space-between">
        <div className="product-page-product-details w100">
          <div className="container-fluid flex-container  justify-space-between">
            <div className="flex-container gapp5">
              {product.tags.map((element, index) => {
                const tag = element[0].toUpperCase() + element.slice(1);
                return (
                  <p className="product-tag" key={index}>
                    {tag}
                    {" >"}
                  </p>
                );
              })}
            </div>
            <div className="flex-container product-sharing-options justify-center align-center gapp5 nowrap">
              <input type="checkbox" name="" id="" />{" "}
              <label htmlFor="">Compare</label>
              <i className="fa-solid fa-share"></i>
              <label htmlFor="">Share</label>
            </div>
          </div>
          <div className="container-fluid">
            <h3 className="m0">{product.title}</h3>
          </div>
          <div className="container-fluid flex-container gapp5 ptp5 align-center">
            <div className="flex-container bg-green pp2 border-rounded text-white justify-center align-center gapp2 pp1 font-small">
              {product.rating}
              <i
                className="fa-solid fa-star fa-xs"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
            <p className="text-bold font-small text-gray m0">
              {product.reviews.length} Ratings
            </p>
            <img
              className="img-responsive img-sm"
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
              alt=""
            />
          </div>
          <div className="container-fluid flex-container  text-bold text-green ptp5">
            Special Price
          </div>
          <div className="container-fluid flex-container align-center gapp5">
            <p className="text-bold font-larger m0">
              {"₹"}
              {product.price}
            </p>
            <p className="text-bold font-small m0 text-gray">
              {product.discountPercentage}
              {"% Off"}
            </p>
          </div>
          <div className="flex-container ptp5 container-fluid flex-column gapp5">
            <h6 className="text-bold">Available Offers</h6>
            <div className="flex-container align-center gapp5">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
                className="img-responsive img-xs"
              />
              <p className="m0 font-small">
                <span className="text-bold font-small">Bank Offer</span> Get ₹50
                Instant Discount on first Flipkart UPI transaction on order of
                ₹200 and above
              </p>
            </div>
            <div className="flex-container align-center gapp5">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
                className="img-responsive img-xs"
              />
              <p className="m0 font-small">
                <span className="text-bold font-small">Bank Offer</span> Get ₹50
                Instant Discount on first Flipkart UPI transaction on order of
                ₹200 and above
              </p>
            </div>
            <div className="flex-container align-center gapp5">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
                className="img-responsive img-xs"
              />
              <p className="m0 font-small">
                <span className="text-bold font-small">Bank Offer</span> Get ₹50
                Instant Discount on first Flipkart UPI transaction on order of
                ₹200 and above
              </p>
            </div>
            <div className="flex-container align-center gapp5">
              <img
                src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                alt=""
                className="img-responsive img-xs"
              />
              <p className="m0 font-small">
                <span className="text-bold font-small">Bank Offer</span> Get ₹50
                Instant Discount on first Flipkart UPI transaction on order of
                ₹200 and above
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
