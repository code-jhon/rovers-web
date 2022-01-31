import React from 'react'
import ReactPlayer from 'react-player'

import "./styles.scss"

export function AudioPlayer() {
  return (
    <div className='audioplayer'>
      <ReactPlayer 
        className='react-player'
        loop
        controls 
        url="https://upload.wikimedia.org/wikipedia/commons/d/da/Sounds_of_Perseverance_Mars_rover_driving.oga" 
        width="100%"
        height="27px"
      />
    </div>
  )
}
