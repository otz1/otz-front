import React, { useState, useEffect } from 'react'
import './SearchPage.css'

import queryString from 'query-string'

import { SearchResult } from 'model/model'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { SearchService } from 'services/searchService'

import { LoadingContainer } from './LoadingUtils'
import { SearchResultContainer } from './SearchResultContainer'
import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'
import { resizeHeader } from 'pages/util'
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState<SearchResult>({
    query: '',
    results: [],
    measurements: {},
    numPages: 0,
    searchTerms: [],
  })

  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [initialQuery, setInitialQuery] = useState('')

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
    const values = queryString.parse(location.search)
    const { query } = values
    if (query) {
      setInitialQuery(query as string)
      handleProcessSearch(query as string)
    }
  }, [location])

  useEffect(() => {
    setLoading(false)
  }, [searchResult])

  return (
    <>
      <Header>
        <SearchBar initialQuery={initialQuery} processSearchHandler={handleProcessSearch} />
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
