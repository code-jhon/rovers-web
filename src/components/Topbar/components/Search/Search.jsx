import React from 'react';
import "./styles.scss"

export function Search() {
  return (
    <div>
      <input 
        type="text" 
        name="search" 
        className='searchInp' 
        autocomplete="off" 
      />
    </div>
  );
}
