import React from 'react'

import { Result as ResultModel } from 'model/model'

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

export {
  Result
}