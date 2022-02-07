import { useContext } from 'react';
import { RoversContext } from '../../../providers/RoversProvider';
import "./styles.scss"

export function Weather() {
  const { currentRover } = useContext(RoversContext)
  const { weather } = currentRover
  return (
    <div className='weatherContainer'>
      <iframe title={`weather data`} src={weather.embed} className='responsive-iframe' scrolling='no' frameborder='0'></iframe>
    </div>
  );
}
