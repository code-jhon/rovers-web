import React from 'react'
import { 
  RoverCard, 
  AudioPlayer,
  Specifications
} from './components'

import "./styles.scss";


export function Sidebar({data}) {
  console.log(data, "data")

  const audio = data?.gallery?.audio

  const content = data?.name && (
    <section className="content">
      <RoverCard {...data} />
      <div>
        <AudioPlayer audio={audio} />
      </div>
      <div>
        <Specifications {...data.specifications}/>
      </div>
      <footer>
        Credits
      </footer>
    </section>
  )

  return content
}
