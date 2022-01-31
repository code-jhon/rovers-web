import React from 'react';
import "./styles.scss"

export function Specifications() {
  return (
    <div className='specs-content'>
      <div className='tag w100'>Tech Specs</div>
      <div className='specs-group w100'>
        <div className='specs-attr w50'>Dimentions: </div>
        <div className='specs-val w50'>Val</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w40'>Drymass: </div>
        <div className='specs-val w60'>Val</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w40'>Rocket: </div>
        <div className='specs-val w60'>Val</div>
      </div>
      <div className='tag w100'>Flight History</div>
      <div className='specs-group w100'>
        <div className='specs-attr w100'>Launched Date: </div>
        <div className='specs-val w100'>Val</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w100'>Launched Place: </div>
        <div className='specs-val w100'>Val</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w100'>Landing Date: </div>
        <div className='specs-val w100'>Val</div>
      </div>
      <div className='specs-group w100'>
        <div className='specs-attr w100'>Landing Place: </div>
        <div className='specs-val w100'>Val</div>
      </div>
    </div>
  );
}
