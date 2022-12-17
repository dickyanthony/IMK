import React from "react";
import { useNavigate } from "react-router";
import "../screens/Home/flipbook.css";

export default function ItemBook(props) {
  const { isReadMore, windowWidth, item } = props;
  const navigate = useNavigate();

  return (
    <div className="babContainer" onClick={() => navigate(item.onClick)}>
      <div className="row">
        <img src={item.img} style={{ height: "70px" }} />

        <div
          className="titleStyle"
          style={{
            fontSize:
              windowWidth > 414 ? "15px" : windowWidth > 266 ? "12px" : "10px",
          }}
        >
          {item.id}. {item.name}
          <span
            className="new"
            style={{
              fontSize:
                windowWidth > 404
                  ? "15px"
                  : windowWidth > 266
                  ? "12px"
                  : "10px",
            }}
          >
            {item.isNew ? "new" : ""}
          </span>
        </div>
      </div>
      <div className="row">
        <div
          className="dateStyle sm:text-xs"
          style={{
            fontSize:
              windowWidth > 404 ? "15px" : windowWidth > 266 ? "12px" : "10px",
          }}
        >
          {windowWidth > 404 ? item.date : 2022}
        </div>
        <div
          className="tx"
          style={{
            fontSize:
              windowWidth > 404 ? "15px" : windowWidth > 266 ? "12px" : "10px",
          }}
        >
          #{item.id}
        </div>
      </div>
    </div>
  );
}
