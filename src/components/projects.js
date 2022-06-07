import React from "react";

import * as style from "../style/index.module.css";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className={style.container} id="projects">
      <h2> Projects </h2>
        <section className={style.projects}>
          <section className={style.imgContainer}>
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
          </section>
          <div className={style.projectText}>
            <h3>Leashed</h3>
              <p>
                Leashed is Tinder for dogs! A location-based mobile app that lets you create a profile for your fluffy friend to meet local dogs and set up playdates. The swipe right functionality lets you like dogs in your area to find matches and create lasting friendships!
              </p>
              <p>
                Built by a team of four engineers who used a Firebase backend with authorization and Firestore as the noSQL database. This app was designed with an appealing user interface that utilized React Native, Paper, and Expo framework. The team organized the development process by taking advantage of a Kanban project management system.
              </p>
              <p>Team Members: Soli Choi, Krista Naso, Ashley Tran and Tiffany McNerlin.</p>
              <div className={style.projectLinks}>
                <a href="https://github.com/2111-GH-Team-Cake-Capstone/2111-GH-Team-Cake-Capstone"
                  target="_blank">
                <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                Github
                </a>
              </div>
            </div>
        </section>
        <section className={style.projects}>
          <section className={style.imgContainer}>
            <StaticImage
              src="../images/HoneMovies.png"
              alt="Honeflower Logo"
              placeholder="blurred"
              layout="fixed"
              style={{
                height: "200px",
                width: "200px",
              }}
            />
          </section>
          <div className={style.projectText}>
            <h3>Honeflower Movies</h3>
            <p>
              Honeflower Movies is a functional eCommerce website where you can browse and purchase your favorite movies.
            </p>
            <p>
              Team Members: Jill Sherman, Krista Naso, Cara Dodge and Krystin Fields.
            </p>
            <div className={style.projectLinks}>
                <a href="https://github.com/2111honeflower/2111-grace-shopper"
                  target="_blank">
                <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                Github
                </a>
                <a href="https://movie-shopper.herokuapp.com/"
                  target="_blank">
                <FontAwesomeIcon icon={faUpRightFromSquare} size={"2x"}/>
                Live Deploy
                </a>
              </div>
          </div>
        </section>
      </div>
  );
}
