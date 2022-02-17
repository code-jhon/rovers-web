import React from 'react'
import { 
  RoverCard, 
  AudioPlayer,
  Specifications
} from './components'

import "./styles.scss";


export function Sidebar({data}) {
  const audio = data?.gallery?.audio

  const content = data?.name && (
    <section className="content">
      <div className='more-info'>More info</div>
      <RoverCard {...data} />
      <div>
        <AudioPlayer audio={audio} />
      </div>
      <div>
        <Specifications {...data.specifications} />
      </div>
    </section>
  )

  return <>{content}</>
}
