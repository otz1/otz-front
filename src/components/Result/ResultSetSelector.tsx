import React, { useState } from 'react'
import './ResultSetSelector.css'

interface ResultSetSelectorProps {
  onLoadMore: () => void
}

const ResultSetSelector = ({ onLoadMore }: ResultSetSelectorProps) => {  
  const loadMoreHandler = () => onLoadMore()
  return (
    <div className='page-selector-btn'>
      <div className='btn' onClick={loadMoreHandler}>Load more</div>
    </div>
  )
}

export {
  ResultSetSelector
}