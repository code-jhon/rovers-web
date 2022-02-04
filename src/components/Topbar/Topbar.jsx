import React from 'react'

import { Search } from './components';

import Mars from '../../assets/mars.png'
import "./styles.scss";

export function Topbar({rovers}) {
  return (
      <nav className="topbar">
        <div className="brand">
          <img className="brand-logo" width="24" src={Mars} alt="mars rovers icon"/>
          <span className="brand-name">
            Mars Rovers | Dashboard
          </span>
        </div>
        <div className="search">
          <Search rovers={rovers}/>
        </div>
        <div className="user">
          User
        </div>
      </nav>
  )
}
