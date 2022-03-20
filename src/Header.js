import React from "react";
import "./Header.css";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <AiOutlineSearch className="header-search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="header-option-line1">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-option-line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-option-line1">Returns</span>
          <span className="header-option-line2"> & Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-line1">Your</span>
          <span className="header-option-line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-option-basket">
            <AiOutlineShoppingCart />
            <span className="header-option-line2 header-basket-count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
