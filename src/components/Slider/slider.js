import React, {useState} from "react";

import * as style from "../style/index.module.css";

import sliderButton from "./sliderButton"
import { sliderData } from "./sliderData";

export default function Slider () {
  let [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    slideIndex !== sliderData.length ? setSlideIndex(slideIndex++) : setSlideIndex(1);
  }

  const prevSlide = () => {
    slideIndex !== 1 ? setSlideIndex(slideIndex--) : setSlideIndex(sliderData.length);
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <div className="container-slider">
            {sliderData.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                        />
                    </div>
                )
            })}
            <sliderButton moveSlide={nextSlide} direction={"next"} />
            <sliderButton moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
  )
}
