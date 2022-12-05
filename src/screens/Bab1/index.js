import React, { useState } from "react";
import "./imk.css";
import Bab1 from "./Bab1";
import Bab11 from "./Bab11";
import Bab12 from "./Bab12";
import Bab13 from "./Bab13";
import Bab14 from "./Bab14";
import { PressButton } from "../../components/Button";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
function BabFirst() {
  const bab1Options = [
    "Bab 1",
    "1.1 ANTAR MUKA MANUSIA DAN KOMPUTER",
    "1.2 INTERAKSI MANUSIA DAN KOMPUTER",
    "1.3 PERANTI BANTU PENGEMBANG SISTEM",
    "1.4 STRATEGI PENGEMBANGAN ANTARMUKA",
  ];
  const [readFull, setReadFull] = useState(false);

  const [defaultOption, setDefaultOption] = useState(bab1Options[0]);
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

  const ReadOne = () => {
    return <Bab1 />;
  };
  return (
    <div className="container">
      {!readFull && (
        <Dropdown
          options={bab1Options}
          onChange={(val) => setDefaultOption(val)}
          value={defaultOption}
          placeholder="Select an option"
        />
      )}
      <PressButton
        title={readFull ? "read less" : "read full"}
        onClick={() => setReadFull(!readFull)}
      />

      <div className="contentContainer">
        {readFull ? <ReadAll /> : <ReadOne />}
      </div>
    </div>
  );
}

export default BabFirst;
