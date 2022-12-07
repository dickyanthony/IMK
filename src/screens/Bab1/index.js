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
    if (defaultOption === bab1Options[0]) {
      return <Bab1 readFull={readFull} />;
    } else if (defaultOption === bab1Options[1]) {
      return <Bab11 readFull={readFull} />;
    } else if (defaultOption === bab1Options[2]) {
      return <Bab12 readFull={readFull} />;
    } else if (defaultOption === bab1Options[3]) {
      return <Bab13 readFull={readFull} />;
    } else if (defaultOption === bab1Options[4]) {
      return <Bab14 readFull={readFull} />;
    }
  };
  return (
    <div className="containerBab">
      <div
        className="headerContainer"
        style={{ justifyContent: readFull ? "flex-end" : "space-between" }}
      >
        {!readFull && (
          <Dropdown
            options={bab1Options}
            onChange={(val) => setDefaultOption(val.value)}
            value={defaultOption}
            placeholder="Select an option"
            className="dropdownContainer"
          />
        )}
        <PressButton
          className="btnContainer"
          containerStyle={{ border: "1px solid blue" }}
          title={readFull ? "read less" : "read full"}
          onClick={() => setReadFull(!readFull)}
        />
      </div>

      <div className="contentContainer">
        {readFull ? <ReadAll /> : <ReadOne />}
      </div>
    </div>
  );
}

export default BabFirst;
