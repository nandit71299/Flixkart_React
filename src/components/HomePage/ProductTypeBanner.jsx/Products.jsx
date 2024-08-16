import React from "react";

import "./Products.css";
import ProductTypeBanner from "./ProductTypeBanner";

const data = [
  {
    id: 1,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/698ba0cebe456aaf.jpg?q=100",
    title: "Top Offer",
  },
  {
    id: 2,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/44e10b16e649b691.jpg?q=100",
    title: "Mobile Phones",
  },
  {
    id: 3,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/717b5077a5e25324.jpg?q=100",
    title: "Washing Machines",
  },
  {
    id: 4,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/4da1d0d19350cc84.jpg?q=100",
    title: "Laptops",
  },
  {
    id: 5,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/9d4e9c605fc1d2d3.jpg?q=100",
    title: "Clothings",
  },
  {
    id: 6,
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/a5e656672d0548dd.jpg?q=100",
    title: "Kids and Stationary",
  },
];

export default function Products() {
  return (
    <>
      <div className="products-container">
        {data.map((element) => {
          return (
            <ProductTypeBanner
              key={element.id}
              id={element.id}
              image={element.image}
              title={element.title}
            />
          );
        })}
      </div>
    </>
  );
}
