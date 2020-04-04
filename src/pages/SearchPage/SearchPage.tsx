import React, { useState, useEffect } from 'react'
import './SearchPage.css'

import { SearchResult } from 'model/model'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { SearchService } from 'services/searchService'

import { LoadingContainer } from './LoadingUtils'
import { SearchResultContainer } from './SearchResultContainer'
import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'
import { resizeHeader } from 'pages/util'

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<SearchResult>({
    query: '',
    results: [],
    measurements: {},
    numPages: 0,
    searchTerms: [],
  })

  // TODO high order component for loading.
  const [loading, setLoading] = useState(false)

  const handleProcessSearch = async (query: string) => {
    if (!query || query.length === 0) {
      return
    }

    resizeHeader()
    setLoading(true)

    const response = await SearchService.processSearch(query)
    setSearchResult({
      query: response.query,
      results: response.results,
      measurements: response.measurements,
      numPages: response.numPages,
      searchTerms: response.searchTerms,
    })
  }

  useEffect(() => {
    setLoading(false)
  }, [searchResult])

  return (
    <>
      <Header>
        <SearchBar processSearchHandler={handleProcessSearch} />
      </Header>

      <main>
        <div className='container'>
          { loading ? <LoadingContainer/> : <SearchResultContainer searchResult={searchResult} />}
        </div>
      </main>

      <Footer/>
    </>
  )
}

export {
  SearchPage
}
