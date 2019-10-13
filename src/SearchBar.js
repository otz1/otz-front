import React, { useState } from 'react'

export default ({ processSearch }) => {
  const [query, setQuery] = useState('')
  const handleOnChange = (e) => setQuery(e.target.value)

  const handleKeyUp = (e) => { if (e.keyCode === 13) processSearch(query) }

  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Search something...'
          value={query}
          onChange={handleOnChange}
          onKeyUp={handleKeyUp}
        />
      </div>
    </div>
  )
}
