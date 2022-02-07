import { useState } from 'react';
import { AutoComplete } from "../AutoComplete"
import "./styles.scss"

export function Search({rovers}) {
  const [visible, setVisible] = useState(false)
  const [search, setSearch] = useState('')

  const handleKeyDown = e => {
    e.keyCode === 27 && setVisible(false)
  }

  return (
    <div>
      <input 
        type="text" 
        name="search" 
        className='searchInp' 
        autoComplete="off"
        placeholder="Search"
        onClick={e => setVisible(!visible)}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      { visible && <AutoComplete rovers={rovers} search={search} setVisible={setVisible} /> }
    </div>
  );
}
