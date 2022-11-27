import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "../../components/CardTrend";
import "../../components/CardTrend/cardtren.css";
import FlipBook from "./FlipBook";

function Home() {
  const [cardTrend, setCardTrend] = useState([
    {
      image: require("../../assets/card-trend1.jpg"),
      title: "Title Card",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedneque dolor quis congue",
    },
    {
      image: require("../../assets/card-trend2.jpg"),
      title: "Title Card",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedneque dolor quis congue",
    },
    {
      image: require("../../assets/card-trend3.jpg"),
      title: "Title Card",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedneque dolor quis congue",
    },
    {
      image: require("../../assets/card-trend4.jpg"),
      title: "Title Card",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedneque dolor quis congue",
    },
  ]);

  return (
    <>
      <div className="container">
        <FlipBook />
      </div>
    </>
  );
}

export default Home;
