import React from "react";
import ReactTyped from "react-typed";
import { PrimaryButton } from "../../components/Button/index";
export default function Introduction() {
  return (
    <div className="aboutus_wrap">
      <div className="aboutus_text">
        <div style={{ fontSize: "20px" }}>Hi, I'm Dicky Anthony</div>
        <div style={{ display: "flex" }}>
          <div style={{ fontSize: "20px" }}>{"I'm Currently Working as "}</div>
          <ReactTyped
            style={{ marginLeft: "4px", fontSize: "20px", flex: 1 }}
            strings={[" Android Developer", " IOS Developer"]}
            typeSpeed={100}
            backSpeed={100}
            loop={true}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper lorem
          facilisis sed scelerisque eu tellus, sed. Proin velit ac malesuada ac
          nibh aliquam tristi
        </p>
        <PrimaryButton
          to="https://www.instagram.com/dickyanth/"
          target="_blank"
          title="Know Me More"
        />
      </div>

      <div className="big_logo">
        <img src={require("../../assets/logo-about.png")} />
      </div>
    </div>
  );
}
