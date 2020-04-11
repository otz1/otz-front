import React, { useState } from 'react'
import { Result } from 'model/model'
import './ResultSetSelector.css'

interface SelectorProps {
  index: number
  selectedIndex: number
  onPageSelect: (index: number) => void
}

const Selector = ({ selectedIndex, index, onPageSelect }: SelectorProps) => {
  const onClick = () => {
    onPageSelect(index)
    return false
  }

  const classList = ['page-selector-btn']
  if (index == selectedIndex) {
    classList.push('current')
  }

  const pageIndex = index + 1
  return (
    <span className={classList.join(' ')} onClick={onClick}>{pageIndex}</span>
  )
}

interface ResultSetSelectorProps {
  numPages: number
  items: Result[]
  onPageSelect: (index: number) => void
}

const ResultSetSelector = ({ numPages, items, onPageSelect }: ResultSetSelectorProps) => {  
  const [selectedIndex, storeSelectedIndex] = useState<number>(0)

  const pageSelectHandler = (index: number) => {
    onPageSelect(index)
    storeSelectedIndex(index)
  }
  
  var pageIndices = [ ... (Array(numPages).keys() as any) ]
  const buttons = pageIndices.map((btnIndex) => {
    return <Selector 
      key={`selector-${btnIndex}`}
      onPageSelect={pageSelectHandler} 
      selectedIndex={selectedIndex} 
      index={btnIndex} />
  })

  return (
    <div className='page-select'>
      {buttons}
    </div>
  )
}

export {
  ResultSetSelector
}