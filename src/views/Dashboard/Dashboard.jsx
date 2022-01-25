import React from 'react'
import { 
  Topbar, 
  Sidebar,
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
          <div style={{width: "300px"}}>
           <DraggableVideoFeed />
          </div>

          <div style={{width: "300px"}}>
            <DraggableGallery />
          </div>
        </section>
      </main>
    </div>
  )
}
