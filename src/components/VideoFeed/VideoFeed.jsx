import React from 'react'
import ReactPlayer from 'react-player'

export function VideoFeed({width, height}) {
  return (
    <div>
      <ReactPlayer width={width} height={height} controls url="https://upload.wikimedia.org/wikipedia/commons/transcoded/0/0d/Perseverance_Rover%27s_Descent_and_Touchdown_on_Mars_Onboard_Camera_Views_.webm/Perseverance_Rover%27s_Descent_and_Touchdown_on_Mars_Onboard_Camera_Views_.webm.480p.vp9.webm" />
    </div>
  )
}
