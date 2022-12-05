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
          <div
            className="transition"
            style={{ height: "200px", borderColor: "black", borderWidth: 1 }}
          >
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              {headerItems.map((item) => {
                if (item.title === "IMK") {
                  return (
                    <li
                      key={item.id}
                      onMouseEnter={() => setDropdown(true)}
                      onMouseLeave={() => setDropdown(false)}
                    >
                      <Link to={item.path} className="navprod_text">
                        {item.title}
                      </Link>
                      {dropdown && (
                        <Dropdown onMouse={(val) => setDropdown(val)} />
                      )}
                    </li>
                  );
                }
                return (
                  <li key={item.id} className="navprod_text">
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <Link to="/About" className="navprod_text">
              About
            </Link>
          </div>
        </div>

        <div>
          <Link to="#" className="nav_btn">
            Log In
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
