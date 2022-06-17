const React = require("react");

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
  <meta name="description" content="The personal portfolio of Krista Naso a Front End Developer from the Chicago Area. View projects, recommendations, and proficient technologies!"/>
]

exports.onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
}) => {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
}
