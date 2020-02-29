import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

import HeaderBackgroundImage from "../components/headerBackgroundImage"
import Menu from "./menu"

const HeaderWrapper = styled.header`
  min-height: 80vh;
  margin-bottom: 1.45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.h1`
  font-family: "Espa";
  font-size: 133px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 8;
`

const Header = ({ siteTitle }) => (
  <HeaderBackgroundImage>
    <HeaderWrapper>
      <Menu />
      <HeaderTitle style={{ margin: 0 }}>Piacere, Alessandro.</HeaderTitle>
    </HeaderWrapper>
  </HeaderBackgroundImage>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
