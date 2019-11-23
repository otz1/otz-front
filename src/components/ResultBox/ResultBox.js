import React from 'react'

const Result = ({ details }) => {
  const { href } = details

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

export default ({ results }) => {
  const resultSet = results.map((result, idx) => <Result key={`result_${idx}`} details={result} />)
  return (
    <div className='results-container'>
      {resultSet}
    </div>
  )
}
