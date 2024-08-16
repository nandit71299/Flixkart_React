import React from "react";

import "./HomePage.css";
import Products from "../components/HomePage/ProductTypeBanner.jsx/Products";
import Carousel from "../components/UIElements/Carousel";
import DealsBanner from "../components/HomePage/DealsBanner/DealsBanner";
import PartnerOffers from "../components/HomePage/PartnerOffers/PartnerOffers";
import BestSellersOnFashion from "../components/HomePage/BestSellersOnFashion/BestSellersOnFashion";

const data = [
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b35a105fe8bc8cbb.png?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3322c8a97f524397.jpeg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/df1e5d0412284b36.jpeg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/399d5c87c8737c48.jpeg?q=20",
];

export default function HomePage() {
  return (
    <div className="homepage-background">
      <Products />
      <Carousel images={data} />
      <DealsBanner />
      <PartnerOffers />
      <BestSellersOnFashion />
    </div>
  );
}
