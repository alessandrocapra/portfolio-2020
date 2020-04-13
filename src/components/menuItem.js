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
  line-height: 25px;
  padding: 3.5rem 2rem;
`

const MenuItem = props => <StyledLink to={props.link}>{props.title}</StyledLink>

export default MenuItem
