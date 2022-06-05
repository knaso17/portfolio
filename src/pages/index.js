import React from "react"
import * as style from "../style/index.module.css"
import { StaticImage } from "gatsby-plugin-image";
import TechStack from "../components/techStack";
import Projects from "../components/projects";

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
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </nav>
      </header>
      <main>
        <title>Krista Naso's Portfolio</title>
        <h1>Krista Naso's Portfolio</h1>
        <div className={style.container} id="about">
          <h2>About</h2>
          <p>Hi, I'm Krista! I'm a Junior Software Engineer who recently graduated from the Grace Hopper Program at Fullstack Academy. To learn more about me, click one of the icons below!</p>
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
        <Projects />
        <TechStack />
      </main>
    </React.Fragment>
  )
}


