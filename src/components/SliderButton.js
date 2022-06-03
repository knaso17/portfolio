import React from "react";

import { StaticImage } from "gatsby-plugin-image";

export default function SliderButton({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <StaticImage
      src="../images/arrows/arrow-25-64.png"
      alt = "arrow"
      style={{
        height: "64px",
        width: "64px",
      }}
      />
    </button>
  );
}
