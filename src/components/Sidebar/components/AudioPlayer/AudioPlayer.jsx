import React from 'react'
import ReactPlayer from 'react-player'

import "./styles.scss"

export function AudioPlayer({audio}) {
  return audio.length > 0 && (
    <div className='audioplayer'>
      <ReactPlayer 
        className='react-player'
        loop
        controls 
        url={audio[0].url} 
        width="100%"
        height="27px"
      />
    </div>
  )
}
