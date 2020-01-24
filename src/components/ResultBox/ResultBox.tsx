import React from 'react'
import { Result as ResultModel } from 'model/model'
import './ResultBox.css'

interface ResultProps {
  result: ResultModel
}

const Result = ({ result }: ResultProps) => {
  const { href } = result

  return (
    <div className='result'>
      <div className='result-head'>
        <h2 className='title'><a href=''>{href}</a></h2>
        <h3 className='raw-link'><a href=''>https://google.com/foo bar baz</a></h3>
      </div>
      <div className='result-body'>
        <p>This is a snippet of information that is relevant to the page.</p>
      </div>
    </div>
  )
}

const ResultSetSelector = () => (
  <div className='page-select'>
    1 2 3 4
  </div>
)

interface ResultBoxProps {
  results: ResultModel[]
}

const ResultBox = ({ results }: ResultBoxProps) => {
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

export {
  ResultBox
}