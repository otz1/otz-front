import React, { useState, useEffect } from 'react'
import './SearchPage.css'

import { SearchResult } from 'model/model'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { SearchService } from 'services/searchService'

import { LoadingContainer } from './LoadingUtils'
import { SearchResultContainer } from './SearchResultContainer'

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<SearchResult>({
    results: [],
    measurements: {},
    numPages: 0,
  })

  // TODO high order component for loading.
  const [loading, setLoading] = useState(false)

  const handleProcessSearch = async (query: string) => {
    setLoading(true)

    const response = await SearchService.processSearch(query)
    setSearchResult({
      results: response.results,
      measurements: response.measurements,
      numPages: response.numPages
    })
  }

  useEffect(() => {
    setLoading(false)
  }, [searchResult])

  return (
    <>
      <header>
        <div className='container'>
          <h1>otz.it</h1>
          <SearchBar processSearchHandler={handleProcessSearch} />
        </div>
      </header>

      <div className='container'>
        { loading ? <LoadingContainer/> : <SearchResultContainer searchResult={searchResult} />}
      </div>

      <footer>
        Copyright &copy; 2020. All rights reserved.
      </footer>
    </>
  )
}

export {
  SearchPage
}
