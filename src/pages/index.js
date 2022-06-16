import React from "react"
import * as style from "../style/index.module.css"
import { StaticImage } from "gatsby-plugin-image";
import TechStack from "../components/techStack";
import Projects from "../components/projects";
import Recommendations from "../components/recommendations";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// markup
export default function IndexPage () {
  return (
    <React.Fragment>
      <header>
          <div className={style.logo} >
            <section className={style.imgContainer}>
              <StaticImage
                src="../images/KNLogo.png"
                alt="KN logo"
                placeholder="blurred"
                layout="fixed"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              </section>
              <p className={style.logoText}>Krista Naso</p>
            </div>
          <nav>
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#tech">Tech</a>
            <a href="#projects">Projects</a>
            <a href="#recs">Recs</a>
          </nav>
          <div className={style.border}></div>
      </header>
      <main>
        <title>Krista Naso's Portfolio</title>
        <h1 id="top">Krista Naso's Portfolio</h1>
        <div className={style.container} id="about">
          <h2>About Me</h2>
          <p>
            Hi, I'm Krista! I live in the Chicago Area and currently work as a Front End Developer.
          </p>
          <p>
            I previously worked in eCommerce marketing after graduating from the University of Illinois at Chicago. I worked on the vendor side of many major retailers, but I wasn't challenged enough by simply uploading products, tracking their progress, and making updates as needed. I decided to revisit my minor in Management Information Systems and start learning CSS, HTML, and JavaScript.
          </p>
          <p>
            After learning the basics and really enjoying them, I decided to made a career transition to Software Engineering and completed the immersive Grace Hopper Program at Fullstack Academy. During that program I learned more about fullstack development including Node.js, PostgreSQL, React, Express and more. I'm now able to take what I've learned and apply it to real world problems and create beautiful websites.
          </p>
          <p>To learn more, or to contact me, click one of the icons below!</p>
          <a href="https://www.linkedin.com/in/krista-naso/"
             target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size={"4x"}/>
            </a>
            <span className={style.fakeMargin}></span>
            <a href="https://github.com/knaso17"
               target="_blank">
              <FontAwesomeIcon icon={faGithub} size={"4x"}
              />
            </a>
        </div>
        <TechStack />
        <Projects />
        <Recommendations/>
      </main>
    </React.Fragment>
  )
}


