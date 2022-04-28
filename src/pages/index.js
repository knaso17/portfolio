import React from "react"
import * as style from "../style/index.module.css"
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// markup
export default function IndexPage () {
  return (
    <React.Fragment>
      <header>
          <StaticImage
              src="../images/KNLogo.png"
              alt="KN logo"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "150px",
                height: "95px",
                objectFit: "cover",
                borderRadius: "30px",
                margin: "12px",
              }}
            />
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </nav>
      </header>
      <main>
        <title>Krista Naso's Portfolio</title>
        <h1>Krista Naso's Portfolio</h1>
        <div className={style.container} id="about">
          <h2>About</h2>
          <p>Hi, I'm Krista!</p>
          <a href="https://www.linkedin.com/in/krista-naso/"
             className="iconLink">
              <FontAwesomeIcon icon={faLinkedin} size={"4x"}/>
            </a>
            <a href="https://github.com/knaso17"
               className="iconLink">
              <FontAwesomeIcon icon={faGithub} size={"4x"}/>
            </a>
        </div>
        <div className={style.container} id="projects">
          <h2>Projects</h2>
        </div>
      </main>
    </React.Fragment>
  )
}


