import React from 'react'
import ReactPlayer from 'react-player'

import "./styles.scss"

export function VideoFeed() {
  return (
    <div className='player-wrapper'>
      <ReactPlayer 
        className='react-player'
        loop
        controls 
        url="https://www.youtube.com/watch?v=lKKsJaVD3qY" 
        width="100%"
        height="300px"
      />
    </div>
  )
}
