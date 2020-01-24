import React, { useState } from 'react'

interface SearchBarProps {
  processSearchHandler: (query: string) => void
}

const SearchBar = ({ processSearchHandler }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleOnChange = (e: any) => setQuery(e.target.value)
  const handleKeyUp = (e: any) => { if (e.keyCode === 13) processSearchHandler(query) }

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

export {
  SearchBar
}