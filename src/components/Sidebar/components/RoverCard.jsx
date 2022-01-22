import React from 'react'

import "./styles.scss"

export function RoverCard() {
  return (
    <div className="rovercard">
      <img className="rover-image" alt="rovers" src={'https://hipertextual.com/wp-content/uploads/2020/07/hipertextual-curiosidades-sobre-perseverance-rover-mision-mars-2020-2020012223.png'} />
      <div>
        name
      </div>
      <div>
        carrier | missiondays
      </div>
    </div>
  )
}
