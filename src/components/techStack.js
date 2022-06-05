import React from "react";

import * as style from "../style/index.module.css";

import { StaticImage } from "gatsby-plugin-image";

export default function TechStack() {
  return (
    <div className={style.techStack}>
      <h2> Tech Stack </h2>
      <div className={style.technologies}>
        <section className={style.imgContainer}>
          <StaticImage
            src="../images/tech/html5.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className={style.imgContainer}>
          <StaticImage
            src="../images/tech/css3.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>{" "}
        <section className={style.imgContainer}>
          <StaticImage
            src="../images/tech/javascript.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />{" "}
        </section>
        <section className={style.imgContainer}>
          <StaticImage
            src="../images/tech/react.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className={style.imgContainer}>
          <StaticImage
            src="../images/tech/redux.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className={style.imgContainer}>
          <StaticImage
            src="../images/tech/postgresql.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className={style.imgContainer}>
          <StaticImage
            src="../images/tech/github.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
        <section className={style.imgContainer}>
          <StaticImage
            src="../images/tech/nodejs.png"
            alt="html icon"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "100px",
              width: "100px",
            }}
          />
        </section>
      </div>
    </div>
  );
}
