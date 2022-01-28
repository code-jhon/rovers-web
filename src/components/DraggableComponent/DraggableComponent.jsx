import React from 'react'
import Draggable from 'react-draggable'

export function DraggableComponent({Component}) {
  return (
    <Draggable >
      <div className="box">
        <Component />
      </div>
    </Draggable>
  )
}
