import React, { useState } from 'react'

import './Calculator.css'

const CalcButton = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className='calc-button'>
      {value}
    </div>
  )
}

const ResultBox = ({result}) => {
  return (
    <div className='calc-result'>
      {result}
    </div>
  )
}

export default () => {
  let [result, setResult] = useState('')

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => {
    let handleOnClick = () => {
      setResult(result + val)
    }

    return (
      <CalcButton 
        value={val}
        onClick={handleOnClick} />
    )
  })

  return (
    <div className='calc-container'>
      <ResultBox result={result} />
      <div className='calc-buttons'>
        {buttons}
      </div>
    </div>
  )
}