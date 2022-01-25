import React from 'react'

import { RoverCard } from './components'

import "./styles.scss";


export function Sidebar() {
  return (
    <section className="content">
      <RoverCard />
      <div>
        audio
      </div>
      <div>
        Rover Dropdown
      </div>
      <footer>
        Credits
      </footer>
    </section>
  )
}
