import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./boxabout.css";
function BoxAbout() {
  const imagePath = "https://via.placeholder.com/100";
  const [showImage, setShowImage] = React.useState(false);
  return (
    <div
      className="containerAbout"
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
      <img
        src={imagePath}
        alt="hover image"
        style={{ opacity: showImage ? 1 : 0 }}
      />
    </div>
  );
}

export default BoxAbout;
