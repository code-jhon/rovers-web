import React from 'react'
import { RoverCard, AudioPlayer } from './components'

import "./styles.scss";


export function Sidebar() {
  return (
    <section className="content">
      <RoverCard />
      <div>
        <AudioPlayer />
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
