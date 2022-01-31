import React, { useContext } from 'react'
import { 
  Topbar, 
  Sidebar,
  CurrentLocation,
  DraggableVideoFeed,
  DraggableGallery,
} from "../../components"

import { SubHeader } from "../../components/Content"

import "./styles.scss"
import { mockRover } from '../../mocks/mocks'

export function Dashboard() {
  //console.log(JSON.stringify(mockRover))
  return (
    <div className="bg-dark dashboard">
      <header>
        <Topbar />
      </header>
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
    </div>
  )
}
