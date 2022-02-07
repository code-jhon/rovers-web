import React from 'react'

import "./styles.scss"

export function RoverCard({sol, name, images, owner}) {
  const image = images && images.find(img => img.type === "big")
  return (
    <div className="rovercard">
      <div className="rover-name">
        { name }
      </div>
      <img className={`rover-image`} alt="rovers" src={image.url} />
      <div className="rover-carrier">
        <a href={owner.url}>{owner.name}</a>
      </div>
      <div className="rover-sol">
        Sol {sol}
      </div>
    </div>
  )
}
