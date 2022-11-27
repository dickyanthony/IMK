import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./flipbook.css";
import { ButtonLink, PrimaryButton } from "../../components/Button";

export default function FlipBook() {
  const [isReadMore, setIsReadMore] = useState(true);
  const navigate = useNavigate();
  function _toIMK() {
    navigate("screens/IMK");
  }

  const RenderTitle = () => {
    return <h3 className="titleStyles">Interaksi Manusia dan Komputer</h3>;
  };

  const FAEyeStar = () => {
    return (
      <div
        className="row"
        style={{
          textAlign: "center",
          alignItems: "center",
          marginTop: "20px",
          marginBottom: "-10px",
        }}
      >
        <FontAwesomeIcon size="sm" icon={faEye} />
        <div className="rate">50</div>
        <FontAwesomeIcon
          size="sm"
          style={{ marginLeft: "15px" }}
          icon={faStar}
        />
        <div className="rate">5</div>
      </div>
    );
  };

  const ButtonCombo = () => {
    return (
      <div
        className="row"
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <ButtonLink
          to={"Screens/IMk"}
          className="buttonContainer"
          classLink="buttonStart"
          title="BACA"
        />
        <PrimaryButton className="primaryButtonContainer" title="+" />
      </div>
    );
  };

  const ReadMore = ({ desc }) => {
    const text = desc;
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
  const BabComp = () => {
    return (
      <div
        className="babContainer"
        onClick={() => _toIMK()}
        style={!isReadMore ? { marginTop: "50px" } : {}}
      >
        <div className="row">
          <img
            src={require("../../assets/imkF.jpg")}
            style={{ width: "70px", height: "70px" }}
          />

          <div className="titleStyle">
            1. Pendahuluan <span className="new">new</span>
          </div>
        </div>
        <div className="row">
          <div className="dateStyle">2022 Nov 27</div>
          <div className="tx">#1</div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="fullContainer">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={require("../../assets/imkF.jpg")}
                alt="Avatar"
                style={{ width: "300px", height: "400px" }}
              />
            </div>
            <div className="flip-card-back">
              <img
                src={require("../../assets/imkB.jpg")}
                alt="Avatar"
                style={{ width: "300px", height: "400px" }}
              />
            </div>
          </div>
          <div className="desc-container">
            <RenderTitle />
            <FAEyeStar />
            <ButtonCombo />
            <ReadMore
              desc="Buku ini membahas aspek-aspek penting yang dipelajari dalam Interaksi Manusia dan Komputer antara lain adalah aspek manusia, aspek komputer, dan aspek lingkungan kerja atau yang lebih dikenal dengan sebutan ergonomik. Dalam buku ini Anda diajak untuk memahami ketiga aspek di atas terutama dalam kaitannya dengan pembuatan antarmuka program aplikasi dan pencapaian kondisi lingkungan kerja yang nyaman.
          Berbeda dengan edisi sebelumnya yang membagi keseluruhan isi buku menjadi dua bagian besar, yaitu diskusi tentang ketiga aspek di atas dan teknik pemrograman untuk membuat tampilan antarmuka program aplikasi. Buku ini hanya mengupas tiga aspek di atas, tetapi dengan kupasan yang lebih mendalam."
            />
          </div>
        </div>
        <BabComp />
      </div>
    </div>
  );
}
