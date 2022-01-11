import React from 'react'
import Draggable from 'react-draggable'
import { 
  Topbar, 
  Sidebar, 
  CurrentLocation,
  VideoFeed,
  Gallery
} from "../../components"

import { Row } from "reactstrap"
import "./styles.scss"

export function Dashboard() {
  return (
    <div className="bg-dark dashboard">
      <div className="topbar">
        <Topbar />
      </div>
      <div className="components">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <div className="secondaryheader">
            <div>name</div>
            <div>audio tag</div>
          </div>
          <div className="currentLocation">
            <CurrentLocation />          
          </div>
          <div className="draggableComponents">
            <div className="component videofeed">
              <Draggable>
                <div className="box">
                  <VideoFeed width="100%" height="auto" />
                </div>
              </Draggable>
            </div>
            <div className="component gallery">
              <Draggable>
                <div className="box">
                  <Gallery width="100%" height="auto" />
                </div>
              </Draggable>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
