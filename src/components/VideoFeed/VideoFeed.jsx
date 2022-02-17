import React from 'react'
import ReactPlayer from 'react-player'

import "./styles.scss"

export function VideoFeed({alt, url, height="300px", autoplay=false}) {
  return (
    <div className='player-wrapper'>
      <div>{alt}</div>
      <ReactPlayer 
        className='react-player'
        playing={autoplay}
        loop
        controls 
        url={url} 
        width="100%"
        height={height}
        volume="0"
      />
    </div>
  )
}
