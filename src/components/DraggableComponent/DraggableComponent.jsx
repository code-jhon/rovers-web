import React from 'react'
import Draggable from 'react-draggable'

import "./styles.scss"

export function DraggableComponent({Component}) {
  return (
    <Draggable>
      <div className='component'>
        <Component />
      </div>
    </Draggable>
  )
}
