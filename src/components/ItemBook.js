import React from "react";
import { useNavigate } from "react-router";
import "../screens/Home/flipbook.css";

export default function ItemBook(props) {
  const { isReadMore, onClick, item } = props;
  const navigate = useNavigate();

  return (
    <div className="babContainer" onClick={() => navigate(item.onClick)}>
      <div className="row">
        <img src={item.img} style={{ width: "70px", height: "70px" }} />

        <div className="titleStyle">
          {item.id}. {item.name}
          <span className="new">{item.isNew ? "new" : ""}</span>
        </div>
      </div>
      <div className="row">
        <div className="dateStyle">{item.date}</div>
        <div className="tx">#{item.id}</div>
      </div>
    </div>
  );
}
