import React, { useState } from "react";
import "./imk.css";
import Bab1 from "./Bab1";
import Bab11 from "./Bab11";
import Bab12 from "./Bab12";
import Bab13 from "./Bab13";
import Bab14 from "./Bab14";
import { PressButton } from "../../components/Button";

function BabFirst() {
  const [readFull, setReadFull] = useState(false);
  const ReadAll = () => {
    return (
      <>
        <Bab1 />
        <Bab11 />
        <Bab12 />
        <Bab13 />
        <Bab14 />
      </>
    );
  };
  return (
    <div className="container">
      <PressButton
        title={readFull ? "read less" : "read full"}
        onClick={() => setReadFull(!readFull)}
      />
      <div className="contentContainer">
        {readFull ? <ReadAll /> : <div>asd</div>}
      </div>
    </div>
  );
}

export default BabFirst;
