import React from 'react'
import "./styles.scss"

export function CurrentLocation({location}) {
  const content = location?.current ? (
    <div className="currentLocation">
      <iframe title="current location" id="myFrame" src={location.current} scrolling='no' frameBorder='0' allowFullScreen></iframe>
    </div>
  ) : (
    <div className="currentLocation flex center">
      <img width={`100%`} src={location.path} alt="path of mission" />
    </div>
  )
  return <>{content}</>
}
