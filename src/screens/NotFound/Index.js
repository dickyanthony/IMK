import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Oval } from "react-loader-spinner";
import "./notfound.css";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div className="containerNotFound">
      <img
        className="imgNotFoundContainer"
        src={require("../../assets/404Error.png")}
      />
      <div style={{ display: "flex" }}>
        <div class="loading">Redirecting to Home...</div>
      </div>
      <Oval
        height={30}
        width={25}
        color="#2596be"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#25a5be"
        strokeWidth={7}
        strokeWidthSecondary={7}
      />
    </div>
  );
}
