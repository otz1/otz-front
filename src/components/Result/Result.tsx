import React from 'react'
import './Result.css'

import { Result as ResultModel } from 'model/model'

interface ResultProps {
  result: ResultModel
}

const Result = ({ result }: ResultProps) => {
  const { href, thumbnailSource, snippet } = result

  return (
    <div className='result'>
      <div className='result-thumb'>
        <img src={thumbnailSource}/>
      </div>
      <div className='result-detail'>
        <div className='result-head'>
          <h2 className='title'><a href={href}>{href}</a></h2>
          <h3 className='raw-link'><a href={href}>{href}</a></h3>
        </div>
        <div className='result-body'>
          <p>{snippet}</p>
        </div>
      </div>
    </div>
  )
}

export {
  Result
}