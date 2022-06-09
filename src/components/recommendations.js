import React from "react";

import * as style from "../style/index.module.css";

export default function Recommendations() {
  return (
    <div className={style.container} id="reco">
      <h2> Recommendations </h2>
        <section>
          <p>
            "Krista was the true MVP of our Grace Hopper Capstone project, Leashed. Leashed is a cross-platform mobile app that allows users to create profiles for their dogs to connect with local dogs through matching and realtime chat. I worked with Krista for three weeks on the development of this app and no matter what the challenge was, Krista was always the first one to offer assistance in debugging and pair programming. On top of her exceptional collaboration skills, she is also tremendously reliable as an independent worker. She voluntarily took on tasks such as user authentication, implementing the navigation stack/bar, and persisting global user context and was able to push up deliverables in a timely manner which kept our team running like a well-oiled machine. I can attest from first-hand experience that Krista would be an impactful asset to any team."
          </p>
          <p>- Ashley Tran</p>
          <p>Ashley worked with Krista on the same team</p>
        </section>
      </div>
  );
}
