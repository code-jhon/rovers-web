import { useState } from 'react';
import "./styles.scss"

function AutoComplete ({rovers, search}) {
  return (
    <div className='autoComplete'>
      autocomplete
    </div>
  )
}

export function Search({rovers}) {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState('')


  return (
    <div>
      <input 
        type="text" 
        name="search" 
        className='searchInp' 
        autoComplete="off"
        placeHolder="Search"
        onClick={e => setVisible(!visible)}
        onChange={e => setSearch(e.target.value)}
      />
      { visible && <AutoComplete rovers={rovers} search={search} /> }
    </div>
  );
}
