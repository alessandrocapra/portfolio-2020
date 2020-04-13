import styled from "styled-components"
import React from "react"

import MenuItem from "./menuItem"

const MenuWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Menu = () => (
  <MenuWrapper>
    <MenuList>
      <MenuItem title="Home" link="/" />
      <MenuItem title="About" link="/about" />
      <MenuItem title="Curriculum" link="/curriculum" />
    </MenuList>
  </MenuWrapper>
)

export default Menu
