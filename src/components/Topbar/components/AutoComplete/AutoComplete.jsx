import { useState } from 'react'
import { RoverItem } from './RoverItem'
import "./styles.scss"

export function AutoComplete({rovers = [], search = ""}) {

  const filterRovers = (rovers, search) => {

    return rovers
  }

  const filteredRovers = search === "" ? rovers : filterRovers(rovers, search)

  const RoversList = () => filteredRovers.length > 0 ? filteredRovers.map(rover => (
    <div>
      <RoverItem {...rover} />
    </div>
  ))
  : (
    <div>No Items </div>
  )

  return (
    <div className='autoComplete'>
      <RoversList />
    </div>
  )
}
