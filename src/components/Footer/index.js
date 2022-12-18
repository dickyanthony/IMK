import React, { useEffect, useState } from "react";
import { getWindowDimensions } from "../../constant";
import "./footer.css";

function Footer() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const RenderSmallFoot = () => {
    return (
      <div className="footer flex w-9/12 justify-center">
        <div className="flex flex-wrap content-center justify-center w-20 h-full">
          <img
            className="w-10 h-10 ml-10"
            src={require("../../assets/logoFooter.png")}
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
    );
  };

  const RenderMedFoot = () => {
    return (
      <div className="footer flex w-9/12 justify-center">
        <div className="flex flex-wrap content-center justify-center w-3/12 h-full ml-25">
          <img
            className="w-10 h-10 ml-25"
            src={require("../../assets/logoFooter.png")}
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
    );
  };
  const RenderBigFoot = () => {
    return (
      <div className="footer flex w-9/12 justify-center">
        <div className="flex flex-wrap content-center justify-center w-20 h-full">
          <img
            className="w-10 h-10 ml-10"
            src={require("../../assets/logoFooter.png")}
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
    );
  };
  return windowDimensions.width > 500 ? <RenderMedFoot /> : <RenderSmallFoot />;
}

export default Footer;
