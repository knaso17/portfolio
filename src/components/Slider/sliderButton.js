import React from "react";
import leftArrow from "../../images/arrows/arrow-89-64.png";
import rightArrow from "../../images/arrows/arrow-25-64.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
