import React, {useState} from "react";

import * as style from "../../style/index.module.css";

import SliderButton from "./SliderButton"
import { sliderData } from "./sliderData";

export default function Slider() {
  let [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    slideIndex !== sliderData.length - 1 ? setSlideIndex(slideIndex++) : setSlideIndex(0);
  }

  const prevSlide = () => {
    slideIndex !== 0 ? setSlideIndex(slideIndex--) : setSlideIndex(sliderData.length - 1);
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <div className="container-slider">
            <h2>{sliderData[slideIndex]}</h2>
            <SliderButton moveSlide={nextSlide} direction={"next"} />
            <SliderButton moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
  );
}
