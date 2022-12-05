import React, { useState } from "react";
import logo from "../../assets/logo-header.png";
import { Link } from "react-router-dom";
import { headerItems } from "./HeaderItem";
import Dropdown from "../Dropdown";
import "./header.css";

function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="navbar_products">
        <img className="navprod_logo" src={logo} />

        <div className="navprod_link">
          <div>
            <Link to={"/"} className="navprod_text">
              Home
            </Link>
          </div>

          <div>
            <Link to="/About" className="navprod_text">
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
