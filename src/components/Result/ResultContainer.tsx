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

const buildResultRange = (startPage: number, endPage: number) => {
  const resultsPerPage = 10
  return {
    start: startPage,
    end: endPage * resultsPerPage,
  }
}

const ResultContainer = ({ searchTerms, results, numPages }: ResultContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const incPage = () => setCurrentPage(currentPage + 1)

  const [resultRange, setResultRange] = useState(buildResultRange(0, 1))

  if (!results) {
    return null
  }

  const rankedResults = results
    .slice(resultRange.start, resultRange.end)
    .sort((a, b) => a.ranking - b.ranking)
  
    const resultSet = rankedResults.map((result: ResultModel, idx: number) => {
    return <Result index={idx} key={`result_${idx}`} result={result} searchTerms={searchTerms} />
  })

  const onLoadMore = () => {
    if (currentPage >= numPages) {
      return
    }
    incPage()
    setResultRange(buildResultRange(0, currentPage + 1))
  }
  const showLoadMore = numPages > 1 && currentPage < numPages

  return (
    <>
      <div className='results-container'>
        {resultSet}
      </div>
      { (showLoadMore) && <ResultSetSelector onLoadMore={onLoadMore} /> }
    </>
  )
}

export {
  ResultContainer
}