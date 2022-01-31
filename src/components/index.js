import { Topbar } from "./Topbar"
import { Sidebar } from "./Sidebar"
import { CurrentLocation } from "./CurrentLocation"
import { VideoFeed } from "./VideoFeed"
import { Gallery } from "./Gallery"
import { Loader } from "./Loader"
import { DraggableComponent } from "./DraggableComponent"

export const DraggableVideoFeed = () => <DraggableComponent Component={VideoFeed} />
export const DraggableGallery = () => <DraggableComponent Component={Gallery} />
export const DraggableLocation = () => <DraggableComponent Component={CurrentLocation} />

export {
  Topbar,
  Sidebar,
  CurrentLocation,
  VideoFeed,
  Gallery,
  Loader
}