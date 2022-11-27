import React from "react";
import { Link } from "react-router-dom";
import "./cardtren.css";

function CardTrend(props) {
  const { item } = props;
  return (
    <>
      <div className="card_trend">
        <div>
          <img className="img_card" src={item.image} />
        </div>
        <div className="card-text">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <Link to="#" className="btn_view">
            View More
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardTrend;
