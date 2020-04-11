import React from 'react'
import './Result.css'

// @ts-ignore
import { Parser as HtmlToReactParser } from 'html-to-react'

import { Result as ResultModel } from 'model/model'

interface ResultProps {
  index: number
  result: ResultModel
  searchTerms: string[]
}

const Result = ({ index, result, searchTerms }: ResultProps) => {
  const { title, href, thumbnailSource, snippet } = result

  const showThumbnail = thumbnailSource && thumbnailSource !== ''

  return (
    <div className='result' id={`rs-${index}`}>
      <a className='result-container-anchor' href={href}>
        { (showThumbnail) && <div className='result-thumb'>
          <img src={thumbnailSource}/>
          </div> }
        <div className='result-detail'>
          <div className='result-head'>
            <h2 className='title'><a href={href}>{title}</a></h2>
            <h3 className='raw-link'><a href={href}>{href}</a></h3>
          </div>
          <div className='result-body'>
            <p>{new HtmlToReactParser().parse(snippet)}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export {
  Result
}