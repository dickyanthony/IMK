import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <img
            className="logo_footer"
            src={require("../../assets/logo-footer.png")}
          />
        </div>

        <div className="footer_icon_container">
          <img
            onClick={() =>
              window.open("https://www.instagram.com/dickyanth/", "_blank")
            }
            className="icon_footer"
            src={require("../../assets/insta.png")}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
