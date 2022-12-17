import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./flipbook.css";
import { ButtonLink, PrimaryButton } from "../../components/Button";
import { book, getWindowDimensions } from "../../constant";
import ItemBook from "../../components/ItemBook";

export default function FlipBook() {
  const [isReadMore, setIsReadMore] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const mBottom =
    windowDimensions.width < 841 && windowDimensions.width >= 679
      ? "80px"
      : windowDimensions.width < 679 && windowDimensions.width >= 653
      ? "120px"
      : windowDimensions.width < 653 && windowDimensions.width >= 637
      ? "200px"
      : windowDimensions.width < 637 && windowDimensions.width >= 605
      ? "260px"
      : "50px";

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
  const FAEyeStarSmall = () => {
    return (
      <div className="w-full">
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
      </div>
    );
  };

  const ButtonCombo2 = () => {
    return (
      <div className="flex w-full justify-between">
        <ButtonLink
          to={"Bab1"}
          className="w-10/12"
          classLink="w-full text-center"
          title="BACA"
        />
        <PrimaryButton className="p2Btn" title="+" />
      </div>
    );
  };

  const ReadMore = ({ desc }) => {
    const text = desc;
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div className={`w-full`}>
        <p className="text">
          {isReadMore ? text.slice(0, 150) : text}
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : " show less"}
          </span>
        </p>
      </div>
    );
  };
  const BabComp = () => {
    return book.map((item) => {
      return <ItemBook windowWidth={windowDimensions.width} item={item} />;
    });
  };
  return (
    <div className={`fullContainer `} style={{ marginBottom: "50px" }}>
      <div
        className={"flip-card"}
        style={{ marginBottom: !isReadMore ? mBottom : "" }}
      >
        <div className="flip-card-inner w-full flex justify-center">
          <div
            className="flip-card-front "
            style={{
              width: windowDimensions.width > 366 ? "300px" : "200px",
              height: windowDimensions.width > 366 ? "400px" : "300px",
            }}
          >
            <img
              src={require("../../assets/imkF.jpg")}
              alt="Avatar"
              style={{
                width: windowDimensions.width > 366 ? "300px" : "200px",
                height: windowDimensions.width > 366 ? "400px" : "300px",
              }}
            />
          </div>
          <div
            className="flip-card-back w-full"
            style={{
              width: windowDimensions.width > 366 ? "300px" : "200px",
              height: windowDimensions.width > 366 ? "400px" : "300px",
            }}
          >
            <img
              src={require("../../assets/imkB.jpg")}
              alt="Avatar"
              style={{
                width: windowDimensions.width > 366 ? "300px" : "200px",
                height: windowDimensions.width > 366 ? "400px" : "300px",
              }}
            />
          </div>
        </div>
        <div
          className={`desc-container  ${
            windowDimensions.width > 436 ? "w-full" : "w-10/12 "
          }`}
        >
          <RenderTitle />
          <FAEyeStar />
          <ButtonCombo2 />
          <ReadMore
            desc="Buku ini membahas aspek-aspek penting yang dipelajari dalam Interaksi Manusia dan Komputer antara lain adalah aspek manusia, aspek komputer, dan aspek lingkungan kerja atau yang lebih dikenal dengan sebutan ergonomik. Dalam buku ini Anda diajak untuk memahami ketiga aspek di atas terutama dalam kaitannya dengan pembuatan antarmuka program aplikasi dan pencapaian kondisi lingkungan kerja yang nyaman.
          Berbeda dengan edisi sebelumnya yang membagi keseluruhan isi buku menjadi dua bagian besar, yaitu diskusi tentang ketiga aspek di atas dan teknik pemrograman untuk membuat tampilan antarmuka program aplikasi. Buku ini hanya mengupas tiga aspek di atas, tetapi dengan kupasan yang lebih mendalam."
          />
        </div>
      </div>
      <BabComp />
    </div>
  );
}
