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
//import { mockRover } from '../../mocks/mocks'

export function Dashboard() {
  //console.log(JSON.stringify(mockRover))
  const { rovers, fetched } = useContext(RoversContext)

  const main = (
    <main>
      <aside>
        <Sidebar />
      </aside>
      <section className="rovers-content">
        <SubHeader />
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
