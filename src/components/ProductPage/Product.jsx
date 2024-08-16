import React, { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import axios from "axios";

import "./Product.css";
import Loader from "../UIElements/Loader";
import HorizontalProductListing from "../UIElements/HorizontalProductListing";

export default function Product(props) {
  const [youMayLikeData, setYouMayLikeData] = useState([]);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${props.productId}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    async function getYouMayLikeData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setYouMayLikeData(response.data);
        setSkeletonLoading(false);
      } catch (error) {
        setSkeletonLoading(true);
        console.log(error);
      } finally {
        setSkeletonLoading(false);
      }
    }

    getData();
    getYouMayLikeData();
  }, [props.productId]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Error: Product not found</div>; // Handle case where no product is found
  }
  return (
    <div className="flex-container flex-column ">
      <div className="product-page-container nowrap">
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
                <label htmlFor="" className="font-small text-bold">
                  Compare
                </label>
                <i className="fa-solid fa-share"></i>
                <label htmlFor="" className="font-small text-bold">
                  Share
                </label>
              </div>
            </div>
            <div className="container-fluid">
              <h3 className="m0 font-larger pt2">{product.title}</h3>
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
                className="img-responsive img-sm flipkartassured"
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt=""
              />
            </div>
            <div className="container-fluid flex-container  text-bold text-green ptp5">
              Special Price
            </div>
            <div className="container-fluid flex-container align-center gapp5">
              <p className="text-bold font-largest m0">
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
                  <span className="text-bold font-small">Bank Offer</span> Get
                  ₹50 Instant Discount on first Flipkart UPI transaction on
                  order of ₹200 and above
                </p>
              </div>
              <div className="flex-container align-center gapp5">
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt=""
                  className="img-responsive img-xs"
                />
                <p className="m0 font-small">
                  <span className="text-bold font-small">Bank Offer</span> Get
                  ₹50 Instant Discount on first Flipkart UPI transaction on
                  order of ₹200 and above
                </p>
              </div>
              <div className="flex-container align-center gapp5">
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt=""
                  className="img-responsive img-xs"
                />
                <p className="m0 font-small">
                  <span className="text-bold font-small">Bank Offer</span> Get
                  ₹50 Instant Discount on first Flipkart UPI transaction on
                  order of ₹200 and above
                </p>
              </div>
              <div className="flex-container align-center gapp5">
                <img
                  src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                  alt=""
                  className="img-responsive img-xs"
                />
                <p className="m0 font-small">
                  <span className="text-bold font-small">Bank Offer</span> Get
                  ₹50 Instant Discount on first Flipkart UPI transaction on
                  order of ₹200 and above
                </p>
              </div>
            </div>
            <div className="container-fluid flex-container ptp5 align-center gapp5">
              <img
                src="https://rukminim2.flixcart.com/image/160/160/prod-fk-cms-brand-images/164752bf18d354f1de5b2451fb11c381da8a6570cd227b9e4828917f34e7e7c6.jpg?q=90"
                alt=""
                className="border pp2 img-responsive img-sm"
              />
              <p className="m0 font-weight-normal">
                {product.warrantyInformation}
              </p>
              <a
                href="#"
                className="font-blue text-bold font-small text-decoration-none"
              >
                Know More
              </a>
            </div>
            <div className="container-fluid ptp5 flex-container gapp5">
              <p className="text-gray font-small text-bold m0">Delivery</p>
              <div className="flex-container flex-column">
                <div className="form-group">
                  <input
                    type="text"
                    className="delivery-text-input"
                    value="34342"
                    onChange={() => {}}
                  />
                  <button
                    htmlFor="Check"
                    className="text-input-inner-button text-blue"
                  >
                    Check
                  </button>
                </div>
                <div>
                  <p className="font-small ptp5">
                    {product.shippingInformation}
                  </p>
                </div>
              </div>
            </div>
            <div className="container-fluid flex-container gapp5 ptp5">
              <div className="text-bold text-gray">{"Description"}</div>
              <div className="font-small">
                {"• "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis unde qui perspiciatis quaerat ab omnis numquam
                deserunt cumque ipsa. Placeat, necessitatibus eius quasi quas
                voluptate mollitia neque aliquam nulla tenetur at debitis atque
                laudantium repellat beatae impedit unde voluptatem tempore dicta
                veniam excepturi. Hic accusamus animi, ab accusantium incidunt
                temporibus voluptate ipsa perspiciatis laboriosam inventore
                necessitatibus dolores labore ea tempore vel reiciendis error
                voluptatibus distinctio sint? Eos iusto quas quisquam nostrum
                sed in, provident amet exercitationem porro quibusdam ad animi
                cupiditate quia labore asperiores assumenda dolores sequi autem
                hic temporibus fugit deserunt voluptatibus molestias cum!
                Deleniti minima totam molestias sunt optio excepturi, nemo
                placeat nulla distinctio nihil, expedita reprehenderit cum aut
                eum sit officiis quis architecto ipsam laborum pariatur quidem.
                Beatae aperiam voluptatibus est animi vel corporis odit
                voluptates dolorem illum, nihil nulla mollitia! Dicta animi
                labore beatae officia enim blanditiis, sapiente, magni ducimus
                consequuntur unde, fugiat eaque. Facere nisi nihil, minima eius,
                doloremque animi quos eos voluptate atque accusamus magnam
                dolore exercitationem corrupti. Cupiditate deserunt facilis ex.
                Deleniti distinctio, rem ratione quaerat iste mollitia unde sint
                voluptatum nemo ad blanditiis tempora vel, quia, reprehenderit
                labore consequuntur recusandae iusto suscipit est veritatis sed
                quas! Tempora numquam commodi quo, totam dolore rem deserunt
                doloribus velit necessitatibus harum aperiam vitae eum. Nemo quo
                quis vero officia blanditiis, beatae ratione sit commodi porro
                quos! Consequuntur enim molestiae dolores placeat hic quaerat,
                sint modi cupiditate minus distinctio eius quas voluptates
                architecto maxime quod, soluta ut magni temporibus optio?
                Expedita debitis est eaque sint rerum. Aliquid consequuntur
                ullam dicta aut libero eligendi rem ad assumenda, officiis
                numquam in distinctio animi id cumque ab voluptatem vitae amet
                culpa? Itaque quos consectetur veniam reiciendis a iusto
                aspernatur fugit ducimus officiis exercitationem, magni,
                similique totam voluptas accusamus, eveniet explicabo quia
                perferendis dolores sint? Asperiores minima dolore ex velit,
                sequi repudiandae vero libero fugit accusantium praesentium
                distinctio perspiciatis dolorum. Eaque totam magnam ipsam odio
                odit in harum iste placeat vero dolorem sunt aut, vel cumque
                atque delectus qui nobis nam optio quisquam ab voluptatibus.
                Veritatis ad veniam, minus modi ipsum est quo eaque unde ut ea
                praesentium minima voluptatem quam itaque, odit officia? Quam in
                omnis nam ipsum odio ab explicabo labore commodi distinctio ut
                molestiae quidem cupiditate magnam, doloremque animi.
                Consectetur debitis incidunt aliquam eveniet quia amet ipsum
                voluptatum ea necessitatibus obcaecati pariatur sunt rerum
                minima dolor, repudiandae quo, nisi unde asperiores totam
                mollitia alias expedita? Et illo sapiente veniam? Dolores culpa
                doloremque magnam rem aliquid, voluptatum blanditiis numquam
                quae cumque voluptates consequuntur. Esse hic commodi nisi
                incidunt animi doloribus itaque labore at qui! Quibusdam
                recusandae fugit vero, obcaecati, dolorum totam incidunt
                delectus illo facere nesciunt est quis placeat minus assumenda
                distinctio impedit inventore ullam quod. Perferendis blanditiis
                tenetur sunt? Cum veniam quibusdam enim amet facilis voluptatum
                earum dolor accusamus dignissimos id beatae nobis, deleniti
                minima maxime blanditiis ipsam repellendus inventore a eum
                doloribus aliquam eius. Aliquam magnam odio voluptas placeat
                dolorem, tempora amet iure doloribus sequi, inventore totam sunt
                soluta minus harum optio voluptatem modi dolore rem.
              </div>
            </div>
          </div>
        </div>
      </div>
      {youMayLikeData && (
        <div className="product-page-related-products-container w100">
          <HorizontalProductListing
            loading={skeletonLoading}
            listingTitle={"You may like"}
            data={youMayLikeData}
          />
        </div>
      )}
    </div>
  );
}
