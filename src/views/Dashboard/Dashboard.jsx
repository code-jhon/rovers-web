import React from 'react'
import { 
  Topbar, 
  Sidebar,
  CurrentLocation,
  DraggableLocation,
  DraggableVideoFeed,
  DraggableGallery,
} from "../../components"

import { SubHeader } from "../../components/Content";

import "./styles.scss"


export function Dashboard() {

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
          </div>
        </section>
      </main>
    </div>
  )
}
