import React, { useState } from 'react'
import { Result as ResultModel } from 'model/model'
import { Result } from './Result'
import './ResultContainer.css'
import { ResultSetSelector } from './ResultSetSelector'

interface ResultContainerProps {
  results: ResultModel[]
  searchTerms: string[]
  numPages: number
}

const sliceResultSet = (index: number) => {
  const resultsPerPage = 10  
  const start = index * resultsPerPage
  return {
    start: start,
    end: start + resultsPerPage,
  }
}

const ResultContainer = ({ searchTerms, results, numPages }: ResultContainerProps) => {
  const [currentResults, setCurrentResults] = useState(results)
  const [resultRange, setResultRange] = useState(sliceResultSet(0))

  if (!results) {
    return null
  }

  const rankedResults = results.slice(resultRange.start, resultRange.end).sort((a, b) => a.ranking - b.ranking)
  const resultSet = rankedResults.map((result: ResultModel, idx: number) => {
    return <Result key={`result_${idx}`} result={result} searchTerms={searchTerms} />
  })

  const onPageSelect = (index: number) => setResultRange(sliceResultSet(index))
  
  return (
    <>
      <div className='results-container'>
        {resultSet}
      </div>
      { numPages > 1 && <ResultSetSelector numPages={numPages} items={rankedResults} onPageSelect={onPageSelect} /> }
    </>
  )
}

export {
  ResultContainer
}