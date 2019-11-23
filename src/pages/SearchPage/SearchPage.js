import React, { useState, useEffect } from 'react'

import './SearchPage.css'

import SearchBar from 'components/SearchBar/SearchBar'
import ResultsBox from 'components/ResultBox/ResultBox'

const LoadingSpinner = () => <div className='loading-spinner'> </div>

const LoadingContainer = () => (
  <div className='loading-container'>
    <LoadingSpinner />
  </div>
)

const InformationPane = ({ measurements }) => {
  const { elapsedTime, resultCount } = measurements
  if (!elapsedTime || !resultCount) {
    return null
  }

  return (
    <p>Generated {resultCount} results in {elapsedTime}/ms.</p>
  )
}

const ResultSetSelector = () => (
  <div className='page-select'>
    1 2 3 4
  </div>
)

const SearchPage = () => {
  const [results, setResults] = useState([])
  const [allResults, setAllResults] = useState([])
  const [measurements, setMeasurements] = useState({})
  const [loading, setLoading] = useState(false)

  // TODO move this into an API thing
  const processSearch = async (query) => {
    setLoading(true)

    const searchQuery = encodeURIComponent(query.trim())
    try {
      const response = await window.fetch(`http://localhost:8001/search?query=${searchQuery}`, {
        method: 'GET',
        referrer: 'no-follow'
      })
      const obj = await response.json()
      if (obj) {
        // todo splice by [0:X]
        setResults(obj.results)

        setAllResults(obj.results)

        setMeasurements(obj.measurements)
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [results])

  return (
    <>
      <header>
        <div className='container'>
          <h1>otz.it</h1>
          <SearchBar processSearch={processSearch} />
        </div>
      </header>

      <div className='container'>
        <InformationPane measurements={measurements} />
        {loading ? <LoadingContainer /> : <ResultsBox results={results} />}
      
        <ResultSetSelector/>
      </div>

      <footer>
        Copyright &copy; 2019. All rights reserved.
      </footer>
    </>
  )
}

export default SearchPage
