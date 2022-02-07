import React from 'react'

import "./styles.scss"

export function RoverCard({sol, name, images, owner}) {
  const image = images && images.find(img => img.type === "big")
  console.log(image, "IMG");
  return (
    <div className="rovercard">
      <div className="rover-name">
        { name }
      </div>
      <img className={`rover-image`} alt="rovers" src={'https://hipertextual.com/wp-content/uploads/2020/07/hipertextual-curiosidades-sobre-perseverance-rover-mision-mars-2020-2020012223.png'} />
      <div className="rover-carrier">
        <a href={owner.url}>{owner.name}</a>
      </div>
      <div className="rover-sol">
        Sol {sol}
      </div>
    </div>
  )
}
