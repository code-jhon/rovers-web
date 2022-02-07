import React from 'react'
import Draggable from 'react-draggable'

import "./styles.scss"

export function DraggableComponent({Component, data}) {
  return (
    <Draggable bounds="#draggableArea">
      <div className='component'>
        <Component {...data} />
      </div>
    </Draggable>
  )
}
