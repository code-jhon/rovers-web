import React from 'react'

import { Nav, NavItem, NavLink } from 'reactstrap'

export function Topbar() {
  return (
      <Nav>
        <NavItem>
          <NavLink
            disabled
            href="#"
          >
            Mars Rover Dashboard
          </NavLink>
        </NavItem>
      </Nav>
  )
}
