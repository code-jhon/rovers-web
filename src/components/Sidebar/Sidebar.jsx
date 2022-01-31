import React from 'react'
import { 
  RoverCard, 
  AudioPlayer,
  Specifications
} from './components'

import "./styles.scss";


export function Sidebar() {
  return (
    <section className="content">
      <RoverCard />
      <div>
        <AudioPlayer />
      </div>
      <div>
        <Specifications />
      </div>
      <footer>
        Credits
      </footer>
    </section>
  )
}
