import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer flex w-full justify-center">
        <div>
          <img
            className="logo_footer"
            src={require("../../assets/logo-footer.png")}
            alt={"footer"}
          />
        </div>

        <div className="footer_icon_container">
          <img
            onClick={() =>
              window.open("https://www.instagram.com/dickyanth/", "_blank")
            }
            className="icon_footer"
            src={require("../../assets/insta.png")}
            alt={"insta"}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
