import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function SliderButton({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <StaticImage
      src={direction === "next" ? "../images/arrows/arrow-25-64.png" :
      "../images/arrows/arrow-89-64.png" }
      alt = "arrow"
      style={{
        height: "64px",
        width: "64px",
      }}
      />
    </button>
  );
}
