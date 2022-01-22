import React from 'react'

import Mars from './mars.png'

import "./styles.scss";

export function Topbar() {
  return (
      <nav className="topbar">
        <div className="brand">
          <img className="brand-logo" width="24" src={Mars} alt="mars rovers icon"/>
          <span className="brand-name">
            Mars Rovers | Dashboard
          </span>
        </div>
        <div className="search">
          Search
        </div>
        <div className="user">
          User
        </div>
      </nav>
  )
}
