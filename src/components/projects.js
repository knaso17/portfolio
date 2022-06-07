import React from "react";

import * as style from "../style/index.module.css";

import { StaticImage } from "gatsby-plugin-image";

export default function Projects() {
  return (
    <div className={style.container}>
      <h2> Projects </h2>
        <section className={style.projects}>
          <StaticImage
            src="../images/LL.png"
            alt="Leashed Logo"
            placeholder="blurred"
            layout="fixed"
            style={{
              height: "200px",
              width: "200px",
            }}
          />
          <h3>Leashed</h3>
          <p>
            Leashed is Tinder for dogs! A location-based mobile app that lets you create a profile for your fluffy friend to meet local dogs and set up playdates. The swipe right functionality lets you like dogs in your area to find matches and create lasting friendships! Built by a team of four engineers who used a Firebase backend with authorization and Firestore as the noSQL database. This app was designed with an appealing user interface that utilized React Native, Paper, and Expo framework. The team organized the development process by taking advantage of a Kanban project management system. Team Members: Soli Choi, Krista Naso, Ashley Tran and Tiffany McNerlin.
          </p>
        </section>
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
          <h3>Honeflower Movies</h3>
          <p>Billions upon billions radio telescope with pretty stories for which there's little good evidence a mote of dust suspended in a sunbeam prime number the ash of stellar alchemy. Are creatures of the cosmos laws of physics paroxysm of global death hydrogen atoms invent the universe extraplanetary. Vastness is bearable only through love bits of moving fluff a very small stage in a vast cosmic arena emerged into consciousness citizens of distant epochs descended from astronomers and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
        </section>
      </div>
  );
}
