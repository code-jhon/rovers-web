import { useContext } from 'react'
import { RoversContext } from '../../../providers/RoversProvider';
import { SectionChart } from "./SectionChart" 
import { SectionDate } from './SectionDate';
import { SectionPressure } from './SectionPressure';

import "./styles.scss"

export const WeatherChart = () => {
  const { currentRover } = useContext(RoversContext);
  const { weather, name } = currentRover
  return (
    <>
      <div>Weather info from {name}</div>
      <div className='flex space-between'>
        <div className='w30 padding size-20'>
          <SectionDate weather={weather} />
        </div>
        <div className='w30'>
          <SectionChart weather={weather} name={name} />
        </div>
        <div className='w30'>
          <SectionPressure weather={weather} name={name} />
        </div>
      </div>
    </>
  )
}
