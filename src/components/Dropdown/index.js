import React, { useState } from "react";
import { serviceDropdown } from "../Header/HeaderItem";
import { Link } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} onClick={() => setDropdown(false)}>
                <div className={[item.cName]}>{item.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
