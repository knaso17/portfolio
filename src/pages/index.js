import React from "react"
import * as style from "../style/index.module.css"
import { StaticImage } from "gatsby-plugin-image";

// markup
export default function IndexPage () {
  return (
    <React.Fragment>
      <header>
        <div>
          <StaticImage
              src="../images/KNLogo.png"
              alt="KN logo"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "75px",
              }}
            />
          </div>
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
        <p>More content coming soon!</p>
      </main>
    </React.Fragment>
  )
}


