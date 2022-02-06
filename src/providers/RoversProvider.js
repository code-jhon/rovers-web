import React, { useState, createContext } from 'react'
import { useRovers } from './customHooks'

export const RoversContext = createContext()

export const RoversProvider = props => {
  const [rovers, fetched] = useRovers()
  const [currentRover, setCurrentRover] = useState({})
  return (
    <RoversContext.Provider value={{rovers, fetched, currentRover, setCurrentRover}} >
      {props.children}
    </RoversContext.Provider>
  )
}
