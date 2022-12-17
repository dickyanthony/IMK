import React, { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getWindowDimensions } from "../../constant";
import "./about.css";

export default function PersonalProject() {
  const [haermes3, setHaermes3] = useState(false);
  const [swiftClaims, setSwiftClaims] = useState(false);
  const [BBA, setBBA] = useState(false);
  const swiftClaim = [
    { img: require("../../assets/swiftclaim1.jpg"), alt: "sc1" },
    { img: require("../../assets/swiftclaim2.jpg"), alt: "sc2" },
    { img: require("../../assets/swiftclaim3.jpg"), alt: "sc3" },
    { img: require("../../assets/swiftclaim4.jpg"), alt: "sc4" },
    { img: require("../../assets/swiftclaim5.jpg"), alt: "sc5" },
  ];
  const haermes = [
    { img: require("../../assets/haermes1.jpg"), alt: "hm1" },
    { img: require("../../assets/haermes2.jpg"), alt: "hm2" },
    { img: require("../../assets/haermes3.jpg"), alt: "hm3" },
    { img: require("../../assets/haermes4.jpg"), alt: "hm4" },
  ];
  const bbaC = [
    { img: require("../../assets/bba1.jpg"), alt: "bba1" },
    { img: require("../../assets/bba2.jpg"), alt: "bba2" },
    { img: require("../../assets/bba3.jpg"), alt: "bba3" },
    { img: require("../../assets/bba4.jpg"), alt: "bba4" },
    { img: require("../../assets/bba5.jpg"), alt: "bba5" },
  ];
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
  const RenderBigPro = () => {
    return (
      <>
        <h2
          className="aboutus_text"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          Few part of ongoing personal team projects
        </h2>
        <div className="wrapCarousel">
          <div
            className="imgContainer"
            style={{ marginRight: "50px" }}
            onMouseEnter={() => setHaermes3(true)}
            onMouseLeave={() => setHaermes3(false)}
          >
            <div>H***** 3</div>

            <div
              onMouseEnter={() => setHaermes3(true)}
              onMouseLeave={() => setHaermes3(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Mobile Application for Haermes Employee Self Service
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Haermes Mobile ESS is a mobile application that can help HR
              workflows and processes
            </div>
            <Carousel
              autoPlay={!haermes3}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >
              {haermes.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>

          <div
            className="imgContainer"
            style={{ marginRight: "50px" }}
            onMouseEnter={() => setSwiftClaims(true)}
          >
            <div>S********m</div>
            <div
              onMouseEnter={() => setSwiftClaims(true)}
              onMouseLeave={() => setSwiftClaims(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Expense Claims Made Easy. S********m is a cloud-based online
              expense management application.
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Eliminate the hassle of collecting and tracking cumbersome paper
              expense receipts and reports
            </div>
            <Carousel
              autoPlay={!swiftClaims}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >
              {swiftClaim.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>
          <div className="imgContainer" onMouseEnter={() => setBBA(true)}>
            <div>B** C</div>
            <div
              onMouseEnter={() => setBBA(true)}
              onMouseLeave={() => setBBA(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Mobile Application for B** B*****ts Helpdesk Ticketing System
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Provides great support for B** User on the go. Simplify user
              inquiries and issues all done from your mobile
            </div>
            <Carousel
              autoPlay={!BBA}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >
              {bbaC.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>
        </div>
      </>
    );
  };

  const RenderMedPro = () => {
    return (
      <>
        <h2
          className="aboutus_text"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          Few part of ongoing personal team projects
        </h2>
        <div className="wrapCarousel">
          <div
            className="imgContainer"
            style={{ marginRight: "50px" }}
            onMouseEnter={() => setHaermes3(true)}
            onMouseLeave={() => setHaermes3(false)}
          >
            <div>H***** 3</div>

            <div
              onMouseEnter={() => setHaermes3(true)}
              onMouseLeave={() => setHaermes3(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Mobile Application for Haermes Employee Self Service
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Haermes Mobile ESS is a mobile application that can help HR
              workflows and processes
            </div>
            <Carousel
              autoPlay={!haermes3}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >
              {haermes.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>

          <div
            className="imgContainer"
            style={{ marginRight: "50px" }}
            onMouseEnter={() => setSwiftClaims(true)}
          >
            <div>S********m</div>
            <div
              onMouseEnter={() => setSwiftClaims(true)}
              onMouseLeave={() => setSwiftClaims(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Expense Claims Made Easy. S********m is a cloud-based online
              expense management application.
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Eliminate the hassle of collecting and tracking cumbersome paper
              expense receipts and reports
            </div>
            <Carousel
              autoPlay={!swiftClaims}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >
              {swiftClaim.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>
          <div className="imgContainer" onMouseEnter={() => setBBA(true)}>
            <div>B** C</div>
            <div
              onMouseEnter={() => setBBA(true)}
              onMouseLeave={() => setBBA(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Mobile Application for B** B*****ts Helpdesk Ticketing System
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Provides great support for B** User on the go. Simplify user
              inquiries and issues all done from your mobile
            </div>
            <Carousel
              autoPlay={!BBA}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              infiniteLoop
            >
              {bbaC.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>
        </div>
      </>
    );
  };

  const RenderSmallPro = () => {
    return (
      <>
        <h2
          className="aboutus_text"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          Few part of ongoing personal team projects
        </h2>
        <div className="wrapCarousel">
          <div
            className="imgContainer"
            style={{ marginRight: "50px" }}
            onMouseEnter={() => setHaermes3(true)}
            onMouseLeave={() => setHaermes3(false)}
          >
            <div>H***** 3</div>

            <div
              onMouseEnter={() => setHaermes3(true)}
              onMouseLeave={() => setHaermes3(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Mobile Application for Haermes Employee Self Service
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Haermes Mobile ESS is a mobile application that can help HR
              workflows and processes
            </div>
            <Carousel
              autoPlay={!haermes3}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {haermes.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>

          <div
            className="imgContainer"
            style={{ marginRight: "50px" }}
            onMouseEnter={() => setSwiftClaims(true)}
          >
            <div>S********m</div>
            <div
              onMouseEnter={() => setSwiftClaims(true)}
              onMouseLeave={() => setSwiftClaims(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Expense Claims Made Easy. S********m is a cloud-based online
              expense management application.
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Eliminate the hassle of collecting and tracking paper
            </div>
            <Carousel
              autoPlay={!swiftClaims}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {swiftClaim.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>
          <div className="imgContainer" onMouseEnter={() => setBBA(true)}>
            <div>B** C</div>
            <div
              onMouseEnter={() => setBBA(true)}
              onMouseLeave={() => setBBA(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Mobile Application for B** B*****ts Helpdesk Ticketing System
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Provides great support for B** User on the go. Simplify user
              inquiries and issues all done from your mobile
            </div>
            <Carousel
              autoPlay={!BBA}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {bbaC.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>
        </div>
      </>
    );
  };

  const RenderSSPro = () => {
    return (
      <>
        <h2
          className="aboutus_text"
          style={{ textAlign: "center", marginBottom: "30px" }}
        >
          Few part of ongoing personal team projects
        </h2>
        <div className="wrapCarousel">
          <div
            className="imgContainer"
            onMouseEnter={() => setHaermes3(true)}
            onMouseLeave={() => setHaermes3(false)}
          >
            <div>H***** 3</div>

            <div
              onMouseEnter={() => setHaermes3(true)}
              onMouseLeave={() => setHaermes3(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Mobile Application for Haermes Employee Self Service
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Haermes Mobile ESS is a mobile application that can help HR
              workflows and processes
            </div>
            <Carousel
              autoPlay={!haermes3}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {haermes.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>

          <div
            className="imgContainer"
            onMouseEnter={() => setSwiftClaims(true)}
          >
            <div>S********m</div>
            <div
              onMouseEnter={() => setSwiftClaims(true)}
              onMouseLeave={() => setSwiftClaims(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Expense Claims Made Easy. S********m is a cloud-based online
              expense management application.
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Eliminate the hassle of collecting and tracking paper
            </div>
            <Carousel
              autoPlay={!swiftClaims}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {swiftClaim.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>
          <div className="imgContainer" onMouseEnter={() => setBBA(true)}>
            <div>B** C</div>
            <div
              onMouseEnter={() => setBBA(true)}
              onMouseLeave={() => setBBA(false)}
              className="projectBlock"
            >
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Mobile Application for B** B*****ts Helpdesk Ticketing System
              <div style={{ whiteSpace: "break-spaces" }}> </div>
              Provides great support for B** User on the go. Simplify user
              inquiries and issues all done from your mobile
            </div>
            <Carousel
              autoPlay={!BBA}
              interval="4000"
              transitionTime="2000"
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
            >
              {bbaC.map((item) => {
                return (
                  <img className="imgSizeAbout" src={item.img} alt={item.alt} />
                );
              })}
            </Carousel>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      {windowDimensions.width > 853 ? (
        <RenderBigPro />
      ) : windowDimensions.width > 775 ? (
        <RenderMedPro />
      ) : windowDimensions.width > 462 ? (
        <RenderSmallPro />
      ) : (
        <RenderSSPro />
      )}
    </div>
  );
}
