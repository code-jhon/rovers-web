import { useState } from 'react';
import "./styles.scss"

export function AutoComplete({rovers = [], search = ""}) {
  const RoverItem = () => (
    <div className='w100'>
      <div>photo</div>
      <div>name</div>
      <div>carrier</div>
    </div>
  )

  const roversList = rovers.length > 0 ? rovers.map(rover => (
    <div>
      <RoverItem rover={rover} />
    </div>
  ))
  : (
    <div>No Items </div>
  )

  return (
    <div className='autoComplete'>
      { roversList }
    </div>
  )
}
