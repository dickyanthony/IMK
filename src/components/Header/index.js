import React, { useState } from "react";
import logo from "../../assets/logo-header.png";
import { NavLink } from "react-router-dom";
import { headerItems } from "./HeaderItem";
import Dropdown from "../Dropdown";
import "./header.css";

function Header() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <div className="navbar_products">
        <img className="navprod_logo" src={logo} alt={logo} />

        <div className="navprod_link">
          <div>
            <NavLink
              to={"/"}
              // className={({ isActive }) =>
              //   isActive ? "asdsd" : "navprod_text"
              // }
              className={({ isActive }) =>
                isActive ? "navprod_text_active" : "navprod_text"
              }
            >
              Home
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "navprod_text_active" : "navprod_text"
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
