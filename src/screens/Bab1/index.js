import React from "react";
import "./imk.css";
import Bab1 from "./Bab1";
import Bab11 from "./Bab11";
import Bab12 from "./Bab12";
import Bab13 from "./Bab13";
import Bab14 from "./Bab14";

function BabFirst() {
  return (
    <div className="container">
      <div className="contentContainer">
        <Bab1 />
        <Bab11 />
        <Bab12 />
        <Bab13 />
        <Bab14 />
      </div>
    </div>
  );
}

export default BabFirst;
