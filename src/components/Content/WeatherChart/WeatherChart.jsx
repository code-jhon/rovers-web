import { useContext } from 'react'
import { RoversContext } from '../../../providers/RoversProvider';

import "./styles.scss"

export const WeatherChart = () => {
  const { currentRover } = useContext(RoversContext);
  const { weather, name } = currentRover
  return (
    <>
      <div>Weather info from {name}</div>
      <div className='flex space-between'>
        <div className='w30'>a</div>
        <div className='w30'>a</div>
        <div className='w30'>a</div>
      </div>
    </>
  )
}
