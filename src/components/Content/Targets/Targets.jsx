import { useContext } from 'react'
import { RoversContext } from '../../../providers/RoversProvider';

import "./styles.scss"

export const Targets = () => {
  const { currentRover } = useContext(RoversContext);
  const { targets, name } = currentRover
  const targetList = targets && targets.map( 
		target => (
			<li>
				<strong>
					{target.target}
				</strong>
				<p>
					{target.desc}
				</p>
			</li>		
		)
	)

	return (
		<>
			<h4>{name}'s Targets</h4>
			<ul>
				{targetList}
			</ul>
		</>
	)
}
