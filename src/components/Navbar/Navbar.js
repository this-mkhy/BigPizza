import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'

export default function Navbar() {
  return (
    <Nav>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon>
            <p>Menu</p>
            <Bars />
        </NavIcon>
    </Nav>
  )
}
