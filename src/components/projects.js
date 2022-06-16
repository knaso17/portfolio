import React from "react";

import * as style from "../style/index.module.css";

import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className={style.container} id="projects">
      <h2> Projects </h2>
      <div className={style.babyBorder}></div>
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
                borderRadius: "15px",
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
              <div>
                <a href="https://github.com/2111-GH-Team-Cake-Capstone/2111-GH-Team-Cake-Capstone"
                  target="_blank">
                <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                {` Github`}
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
                borderRadius: "15px",
              }}
            />
          </section>
          <div className={style.projectText}>
            <h3>Honeflower Movies</h3>
            <p>
              Honeflower Movies is a functional eCommerce website that allows guests and logged-in customers to shop for movies, while administrators can edit, add, and remove products. It features a robust product catalog, security, and persistent user sessions.
            </p>
            <p>
              Built by a team of four engineers who developed the database-backed API using PostgreSQL, Sequelize, Express, and Node.js. This single page application boasts a responsive frontend using React and Redux that included forms and conditional rendering. The development process was managed with an agile workflow that included daily standup meetings.
            </p>
            <p>
              Team Members: Jill Sherman, Krista Naso, Cara Dodge and Krystin Fields.
            </p>
            <div>
                <a href="https://github.com/2111honeflower/2111-grace-shopper"
                  target="_blank">
                <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                {` Github`}
                </a>
                <span className={style.fakeMargin}></span>
                <a href="https://movie-shopper.herokuapp.com/"
                  target="_blank">
                <FontAwesomeIcon icon={faGlobe} size={"2x"}/>
                {` Live Deploy`}
                </a>
              </div>
          </div>
        </section>
        <section className={style.projects}>
          <section className={style.imgContainer}>
            <StaticImage
              src="https://miro.medium.com/max/1400/0*UVG1F-0kLAEWAT3k"
              alt="DSA image"
              placeholder="blurred"
              layout="constrained"
              style={{
                width: "200px",
              }}
            />
          </section>
          <div className={style.projectText}>
              <h3>Data Structures and Algorithms</h3>
              <p>
                This project is a repository for data structures and algorithms practice. It utilizes the Jest framework for unit testing.
              </p>
              <p>I'm currently utilizing Colt Steele's <a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/">udemy</a> course to learn these concepts.</p>
              <p>Solo Project</p>
              <div>
                <a href="https://github.com/knaso17/Algo-Practice"
                  target="_blank">
                <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                {` Github`}
                </a>
              </div>
            </div>
        </section>
      </div>
  );
}
