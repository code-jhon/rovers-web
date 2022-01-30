import React from 'react'

import "./styles.scss"

export function RoverCard() {
  return (
    <div className="rovercard">
      <div className="rover-name">
        Perseverance
      </div>
      <img className="rover-image" alt="rovers" src={'https://hipertextual.com/wp-content/uploads/2020/07/hipertextual-curiosidades-sobre-perseverance-rover-mision-mars-2020-2020012223.png'} />
      <div className="rover-carrier">
        NASA
      </div>
      <div className="rover-sol">
        Sol 186
      </div>
    </div>
  )
}
