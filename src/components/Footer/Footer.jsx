import React from "react";

import Column from "../UIElements/Column";
import data from "./FooterData";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      {data.footer.map((element, index) => {
        return <Column data={element} key={index} />;
      })}
    </div>
  );
}
