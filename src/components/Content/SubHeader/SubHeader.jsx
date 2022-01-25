import React from 'react'
import "./styles.scss"

export function SubHeader() {
  return (
    <div className="subheader">
      <div className="rover">
        Perseverance
        <span className="carrier">Carrier</span>
      </div>
      <div className="manufacturer">Manufacturer</div>
      <div className="launched">Launched Date</div>
    </div>
  )
}
