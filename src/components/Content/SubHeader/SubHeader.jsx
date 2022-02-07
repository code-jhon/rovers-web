import React from 'react'
import "./styles.scss"

export function SubHeader({name, owner, manufacturer, specifications}) {
  return (
    <div className="subheader">
      <div className="rover">
        {name}
        <span className="carrier">{owner.name}</span>
      </div>
      <div className="manufacturer">{manufacturer.name}</div>
      <div className="launched">{specifications.rocket.launched}</div>
    </div>
  )
}
