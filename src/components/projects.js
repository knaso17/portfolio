import React from "react";

import * as style from "../style/index.module.css";

import { StaticImage } from "gatsby-plugin-image";

export default function Projects() {
  return (
    <div className={style.projectContainer}>
      <h2> Projects </h2>
        <section className={style.projects}>
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
          <h3>Leashed</h3>
          <p>Billions upon billions radio telescope with pretty stories for which there's little good evidence a mote of dust suspended in a sunbeam prime number the ash of stellar alchemy. Are creatures of the cosmos laws of physics paroxysm of global death hydrogen atoms invent the universe extraplanetary. Vastness is bearable only through love bits of moving fluff a very small stage in a vast cosmic arena emerged into consciousness citizens of distant epochs descended from astronomers and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
        </section>
      </div>
  );
}
