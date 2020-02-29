import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const HeaderBackgroundImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "header-background.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.placeholderImage.childImageSharp.fluid
      return <BackgroundImage fluid={imageData} />
    }}
  />
)

export default HeaderBackgroundImage
