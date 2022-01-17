import React from "react"

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
              width: "250px",
              height: "250px",
              borderRadius: "125px",
            }}
          />
      </header>
      <main>
        <title>Krista Naso's Portfolio</title>
        <h1>Krista Naso's Portfolio</h1>
        <p>More content coming soon!</p>
      </main>
    </React.Fragment>
  )
}


