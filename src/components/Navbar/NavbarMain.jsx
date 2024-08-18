import React, { useState } from "react";

import "./NavbarMain.css";
import SearchBar from "../UIElements/SearchBar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [hovered, setIsHovered] = React.useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar--logo">
        <Link to={"/"}>
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar--search">
        <form className="search-form">
          <SearchBar placeholder="Search for Products, Brands and More">
            <i className="fa fa-search fa-lg"></i>
          </SearchBar>
        </form>
      </div>
      <div className="navbar--menu">
        <button
          className="login btn "
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          onClick={() => setIsHovered(true)}
        >
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
            alt=""
          />
          <h6>Login</h6>
          {hovered && (
            <div className="login-menu">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Wishlist</p>
            </div>
          )}
        </button>
        <button className="cart btn">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt=""
          />
          <h6>Cart</h6>
        </button>
        <button className="seller btn">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
            alt=""
          />
          <h6>Seller</h6>
        </button>
      </div>
    </nav>
  );
}
