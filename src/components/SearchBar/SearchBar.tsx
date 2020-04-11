import React, { useState, useEffect } from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'util/Button'

interface SearchBarProps {
  processSearchHandler: (query: string) => void
  initialQuery?: string
}

const SearchBar = ({ processSearchHandler, initialQuery }: SearchBarProps) => {
  const [query, setQuery] = useState('')

  const handleOnChange = (e: any) => setQuery(e.target.value)
  const handleKeyUp = (e: any) => { if (e.keyCode === 13) processSearchHandler(query) }
  const handleSubmit = () => processSearchHandler(query)

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery)
    }
  }, [initialQuery])

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
        <Button id='search-btn' data-testid='submit-search-query-btn' onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    </div>
  )
}

export {
  SearchBar
}