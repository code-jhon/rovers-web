import React from 'react'

import "./styles.scss"

export function CurrentLocation() {
  return (
    <div className="currentLocation">
      <iframe title="current location" id="myFrame" src='https://mars.nasa.gov/maps/location/?mission=M20&site=NOW' scrolling='no' frameBorder='0' allowFullScreen></iframe>
    </div>
  )
}
