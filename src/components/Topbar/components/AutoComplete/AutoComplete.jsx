import { useContext } from 'react'
import { RoversContext } from '../../../../providers/RoversProvider'
import { RoverItem } from './RoverItem'
import "./styles.scss"

export function AutoComplete({rovers = [], search = "", setVisible}) {
  const { setCurrentRover } = useContext(RoversContext)

  const filterRovers = (rovers, search) => rovers.filter(rover => rover.name.includes(search))

  const filteredRovers = search === "" ? rovers : filterRovers(rovers, search)

  const RoversList = () => filteredRovers.length > 0 ? filteredRovers.map(rover => (
    <div key={rover.id}>
      <RoverItem {...rover} handleClick={setCurrentRover} />
    </div>
  ))
  : (
    <div>No Items </div>
  )

  return (
    <div className='autoComplete' onClick={e => setVisible(false)}>
      <RoversList />
    </div>
  )
}
