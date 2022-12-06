import React from "react";
import ReactTyped from "react-typed";
import { PrimaryButton } from "../../components/Button/index";
export default function Introduction() {
  return (
    <div className="aboutus_wrap">
      <div className="backgroundImg">
        <div className="aboutus_text">
          <div style={{ color: "white" }}>Hello World</div>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>
            Hi, I'm Dicky Anthony
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ fontSize: "24px", color: "white" }}>
              {"I'm Currently Working as "}
            </div>
            <ReactTyped
              style={{
                marginLeft: "4px",
                fontSize: "24px",
                flex: 1,
              }}
              strings={[" Android Developer", " IOS Developer"]}
              typeSpeed={100}
              backSpeed={100}
              loop={true}
            />
          </div>
          <p style={{ color: "white" }}>
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

        <div className="big_logo">
          <img alt="logo" src={require("../../assets/logo-about.png")} />
        </div>
      </div>
    </div>
  );
}
