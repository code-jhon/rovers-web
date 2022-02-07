import React, { useContext } from 'react'
import { RoversContext } from '../../providers/RoversProvider'

import { 
  Topbar, 
  Sidebar,
  CurrentLocation,
  DraggableVideoFeed,
  DraggableGallery,
  Loader,
} from "../../components"
import { SubHeader } from "../../components/Content"

import "./styles.scss"

export function Dashboard() {
  const { rovers, fetched, currentRover } = useContext(RoversContext)

  const welcome = (
    <section className="rovers-content">
      <div className='rovers-component w100'>
        <img style={{width: "100%"}} src='https://mars.nasa.gov/internal_resources/647' alt="welcome" />
      </div>
    </section>
  )

  const roversContent = (
    <section className="rovers-content">
      <SubHeader {...currentRover}/>
      <div className="rovers-component w100">
        <CurrentLocation />
      </div>
      <div id="draggableArea">
        <div className="w70">
          <DraggableVideoFeed />
        </div>
        <div className="w30">
          <DraggableGallery />
        </div>
        <div className='w30'>
        </div>
      </div>
    </section>
  )

  const main = currentRover && (
    <main>
      <aside>
        <Sidebar data={currentRover}/>
      </aside>
      { currentRover?.id ? roversContent : welcome }
    </main>
  )

  const loader = (
    <main>
      <section>
        <Loader />
      </section>
    </main>
  )

  const content = fetched ? main : loader
  return (
    <div className="bg-dark dashboard">
      <header>
        <Topbar rovers={rovers} />
      </header>
      { content }
    </div>
  )
}
