import React from 'react'
import Draggable from 'react-draggable'
import { 
  Topbar, 
  Sidebar, 
  CurrentLocation,
  VideoFeed,
  Gallery
} from "../../components"

import "./styles.scss"

export function Dashboard() {
  return (
    <div className="bg-dark dashboard">
      <Topbar />
    </div>
  )
}
