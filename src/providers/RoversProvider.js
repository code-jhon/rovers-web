import React, { useState, createContext } from 'react'
import { useRovers } from './customHooks'

export const RoversContext = createContext()

export const RoversProvider = props => {
  const [rovers, fetched] = useRovers()
  return (
    <RoversContext.Provider value={{rovers, fetched}} >
      {props.children}
    </RoversContext.Provider>
  )
}
