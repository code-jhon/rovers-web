import React from 'react';
import "./styles.scss"

export function Specifications({
  dimensions,
  dryMass,
  rocket,
  flightHistory
  }) {
  return (
    <div className='specs-content'>
      <div className='tag w100'>Tech Specs</div>
      <div className='specs-group w100'>
        <div className='specs-attr w50'>Dimensions: </div>
        <div className='specs-val w50'>{dimensions}</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w40'>Dry Mass: </div>
        <div className='specs-val w60'>{dryMass}</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w40'>Rocket: </div>
        <div className='specs-val w60'><a target="_blank" rel="noreferrer" href={rocket.link}>{rocket.name}</a></div>
      </div>
      <div className='tag w100'>Flight History</div>
      <div className='specs-group w100'>
        <div className='specs-attr w100'>Launched Date: </div>
        <div className='specs-val w100'>{flightHistory.launched.date}</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w100'>Launched Place: </div>
        <div className='specs-val w100'><a target="_blank" rel="noreferrer" href={flightHistory.launched.url} alt="launch">{flightHistory.launched.place}</a></div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w100'>Landing Date: </div>
        <div className='specs-val w100'>{flightHistory.landing.date}</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w100'>Landing Place: </div>
        <div className='specs-val w100'><a target="_blank" rel="noreferrer" href={flightHistory.landing.url} alt="landing">{flightHistory.landing.place}</a></div>
      </div>
    </div>
  );
}
