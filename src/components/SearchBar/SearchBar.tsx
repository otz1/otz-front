import React, { useState } from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'util/Button'

interface SearchBarProps {
  processSearchHandler: (query: string) => void
}

const SearchBar = ({ processSearchHandler }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleOnChange = (e: any) => setQuery(e.target.value)
  const handleKeyUp = (e: any) => { if (e.keyCode === 13) processSearchHandler(query) }
  const handleSubmit = () => processSearchHandler(query)

  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <input
          data-testid='search-bar-field'
          className='search-bar-field'
          type='text'
          placeholder='Search something...'
          value={query}
          onChange={handleOnChange}
          onKeyUp={handleKeyUp}
          autoFocus={true}
        />
        <Button data-testid='submit-search-query-btn' onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    </div>
  )
}

export {
  SearchBar
}