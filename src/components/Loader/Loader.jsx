import React from 'react';
import loader from '../../assets/loader.gif'

import './styles.scss'

export function Loader() {
  return <div className='loader-container'><img src={loader} alt="animated loader" /></div>;
}
