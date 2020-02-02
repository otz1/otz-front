import React, { useState } from 'react'
import { Result as ResultModel } from 'model/model'
import { Result } from './Result'
import './ResultBox.css'

interface ResultBoxProps {
  results: ResultModel[]
  numPages: number
}

const getResultsAtPage = (page: number, allResults: ResultModel[]): ResultModel[] => {
  const numResults = allResults.length
  const maxResultsPerPage = 10
  return allResults.slice()
}

const ResultBox = ({ results, numPages }: ResultBoxProps) => {
  const [currentResults, setCurrentResults] = useState(results)

  if (!results) {
    return null
  }

  const resultSet = results.map((result: ResultModel, idx: number) => {
    return <Result key={`result_${idx}`} result={result} />
  })
  
  return (
    <>
      <div className='results-container'>
        {resultSet}
      </div>
      <ResultSetSelector />
    </>
  )
}

const ResultSetSelector = () => (
  <div className='page-select'>
    1 2 3 4
  </div>
)

export {
  ResultBox
}