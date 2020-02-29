import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

const StyledLink = styled(props => <Link {...props} />)`
  font-family: "PT Mono";
  font-weight: bold;
  font-size: 24px;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 27px;
  padding-left: 32px;
  padding-right: 32px;
`

const MenuItem = props => <StyledLink to={props.link}>{props.title}</StyledLink>

export default MenuItem
