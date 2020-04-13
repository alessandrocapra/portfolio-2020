import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

import Menu from "./menu"
import BackgroundImage from "gatsby-background-image"

const Header = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        bgImage: file(relativePath: { eq: "header-background.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = [data.bgImage.childImageSharp.fluid]

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Menu />
          <HeaderTitle>Piacere, Alessandro.</HeaderTitle>
          <HeaderBody>
            I design and develop experiences that make people’s lives simpler,
            while helping businesses achieve their goals.
          </HeaderBody>
        </BackgroundImage>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled(Header)`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-size: cover;
`

const HeaderTitle = styled.h1`
  font-family: "Espa";
  font-size: 133px;
`

const HeaderBody = styled.p`
  font-family: PT Mono;
  font-weight: 700;
  font-size: 2rem;
  line-height: 167%;
  text-align: center;
  color: #ffffff;
  width: 80vw;
`

export default StyledHeader
