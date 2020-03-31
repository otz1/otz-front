import React from 'react'
import { Result } from 'model/model'

interface SelectorProps {
  index: number
  onPageSelect: (index: number) => void
}

const Selector = ({ index, onPageSelect }: SelectorProps) => {
  const onClick = () => {
    onPageSelect(index)
    return false
  }

  return (
    <span onClick={onClick}>{index}</span>
  )
}

interface ResultSetSelectorProps {
  numPages: number
  items: Result[]
  onPageSelect: (index: number) => void
}

const ResultSetSelector = ({ numPages, items, onPageSelect }: ResultSetSelectorProps) => {  
  var pageIndices = [ ... (Array(numPages).keys() as any) ]
  const buttons = pageIndices.map((index) => <Selector onPageSelect={onPageSelect} index={index} />)

  return (
    <div className='page-select'>
      {buttons}
    </div>
  )
}

export {
  ResultSetSelector
}