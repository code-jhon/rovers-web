import React from 'react'
import ReactPlayer from 'react-player'

import "./styles.scss"

export function VideoFeed({alt, url}) {
  return (
    <div className='player-wrapper'>
      <div>{alt}</div>
      <ReactPlayer 
        className='react-player'
        loop
        controls 
        url={url} 
        width="100%"
        height="300px"
      />
    </div>
  )
}
