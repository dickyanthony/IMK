import React, { useEffect, useState } from "react";
import ReactTyped from "react-typed";
import { PrimaryButton } from "../../components/Button/index";
import { getWindowDimensions } from "../../constant";
export default function Introduction() {
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

  const RenderBigIntro = () => {
    return (
      <div
        className={`flex ${
          windowDimensions.width > 1531 ? "w-6/12" : " w-7/12"
        } justify-center mt-5 mb-5 ml-21 mr-21 box-border content-center`}
      >
        <div className="flex flex-col w-470 content-center justify-center">
          <div style={{ color: "white" }}>Hello World</div>
          <div className="text-xl text-white font-bold">
            Hi, I'm Dicky Anthony
          </div>
          <div style={{ display: "flex" }}>
            <div className="text-xl mb-2 text-white">
              {"I'm Currently Working as "}
            </div>
            <ReactTyped
              className="text-xl"
              style={{
                marginLeft: "4px",
              }}
              strings={[" Android Developer", " IOS Developer"]}
              typeSpeed={100}
              backSpeed={100}
              loop={true}
            />
          </div>
          <p className="w-45 text-sm" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            lorem facilisis sed scelerisque eu tellus, sed. Proin velit ac
            malesuada ac nibh aliquam tristi
          </p>
          <PrimaryButton
            to="https://www.instagram.com/dickyanth/"
            target="_blank"
            title="Know Me More"
          />
        </div>

        <img
          className="pl-20 w-80 "
          alt="logo"
          src={require("../../assets/logo-about.png")}
        />
      </div>
    );
  };

  const RenderMediumIntro = () => {
    return (
      <div
        className={`flex ${
          windowDimensions.width > 1082 ? "w-7/12" : " w-9/12"
        } justify-center mt-5 mb-5 ml-21 mr-21 box-border content-center`}
      >
        <div className="flex flex-col w-400 content-center justify-center">
          <div style={{ color: "white" }}>Hello WorldM</div>
          <div className="text-base text-white font-bold">
            Hi, I'm Dicky Anthony
          </div>
          <div style={{ display: "flex" }}>
            <div className="text-base mb-2 text-white">
              {"I'm Currently Working as "}
            </div>
            <ReactTyped
              className="text-base"
              style={{
                marginLeft: "4px",
              }}
              strings={[" Android Developer", " IOS Developer"]}
              typeSpeed={100}
              backSpeed={100}
              loop={true}
            />
          </div>
          <p className="w-45 text-sm" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            lorem facilisis sed scelerisque eu tellus, sed. Proin velit ac
            malesuada ac nibh aliquam tristi
          </p>
          <PrimaryButton
            to="https://www.instagram.com/dickyanth/"
            target="_blank"
            title="Know Me More"
          />
        </div>

        <img
          className="w-60 h-26"
          alt="logo"
          src={require("../../assets/logo-about.png")}
        />
      </div>
    );
  };

  const RenderSmallIntro = () => {
    return (
      <div
        className={`flex ${
          windowDimensions.width > 1082 ? "w-8/12" : " w-9/12"
        } justify-center mt-5 mb-5 ml-21 mr-21 box-border content-center`}
      >
        <div className="flex flex-col w-400 content-center justify-center">
          <div style={{ color: "white" }}>Hello WorldM</div>
          <div className="text-sm text-white font-bold">
            Hi, I'm Dicky Anthony
          </div>
          <div style={{ display: "flex" }}>
            <div className="text-sm mb-2 text-white">
              {"I'm Currently Working as "}
            </div>
            <ReactTyped
              className="text-sm"
              style={{
                marginLeft: "4px",
              }}
              strings={[" Android Developer", " IOS Developer"]}
              typeSpeed={100}
              backSpeed={100}
              loop={true}
            />
          </div>
          <p className="w-45 text-sm" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            lorem facilisis sed scelerisque eu tellus, sed. Proin velit ac
            malesuada ac nibh aliquam tristi
          </p>
          <PrimaryButton
            to="https://www.instagram.com/dickyanth/"
            target="_blank"
            title="Know Me More"
          />
        </div>

        <img
          className="w-40 h-26"
          alt="logo"
          src={require("../../assets/logo-about.png")}
        />
      </div>
    );
  };

  const RenderESmallIntro = () => {
    return (
      <div
        className={`flex ${
          windowDimensions.width > 1082 ? "w-8/12" : " w-9/12"
        } justify-center mt-5 mb-5 ml-21 mr-21 box-border content-center`}
      >
        <div className="flex flex-col w-400 content-center justify-center">
          <div className="text-xs text-white font-bold">
            Hi, I'm Dicky Anthony
          </div>
          <div>
            <div className="flex">
              <div className="text-xs mb-2 text-white">
                {"I'm Currently Working as "}
              </div>
              <ReactTyped
                className="text-xs"
                style={{
                  marginLeft: "4px",
                }}
                strings={[" Android Developer", " IOS Developer"]}
                typeSpeed={100}
                backSpeed={100}
                loop={true}
              />
            </div>
          </div>
          <p className="w-45 text-xs" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            lorem facilisis sed scelerisque eu tellus, sed. Proin velit ac
            malesuada ac nibh aliquam tristi
          </p>
          <PrimaryButton
            to="https://www.instagram.com/dickyanth/"
            target="_blank"
            title="Know Me More"
          />
        </div>
        {windowDimensions.width > 585 && (
          <img
            className="w-40 h-26"
            alt="logo"
            src={require("../../assets/logo-about.png")}
          />
        )}
      </div>
    );
  };

  return (
    <div className="aboutus_wrap w-full">
      {windowDimensions.width > 1317 ? (
        <RenderBigIntro />
      ) : windowDimensions.width > 952 ? (
        <RenderMediumIntro />
      ) : windowDimensions.width > 753 ? (
        <RenderSmallIntro />
      ) : (
        <RenderESmallIntro />
      )}
    </div>
  );
}
