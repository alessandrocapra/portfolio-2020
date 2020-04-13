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
      const imageData = [
        `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`,
        data.bgImage.childImageSharp.fluid
      ]

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Menu />
          <HeaderContent>
            <HeaderTitle>Piacere, <span style={{color: "#F16F6F"}}>Alessandro</span>.</HeaderTitle>
            <HeaderBody>
              I design and develop experiences that make people’s lives simpler,
              while helping businesses achieve their goals.
            </HeaderBody>
          </HeaderContent>
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

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

const StyledHeader = styled(Header)`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
`

const HeaderTitle = styled.h1`
  font-family: "Espa";
  font-weight: 500;
  font-size: 133px;
  color: #fff;
`

const HeaderBody = styled.p`
  font-family: PT Mono;
  font-weight: 700;
  font-size: 24px;
  line-height: 167%;
  text-align: center;
  color: #ffffff;
  width: 65vw;
`

export default StyledHeader
