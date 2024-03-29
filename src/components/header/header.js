import React from "react";
import logo from "./Logo.svg";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <ul className="header">
          <li className="header__item">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="header__item">
            <Link to="/coffeepage">Our coffee</Link>
          </li>
          <li className="header__item">
            <Link to="/" href="#">For your pleasure</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
