import React, { useState } from 'react'

import './Calculator.css'

interface CalcButtonProps {
  value: string
  onClick: () => void
}

const CalcButton = ({ value, onClick }: CalcButtonProps) => {
  return (
    <div onClick={onClick} className='calc-button'>
      {value}
    </div>
  )
}

interface CalcResultBox {
  result: string
}

const CalcResultBox = ({result}: CalcResultBox) => {
  return (
    <div className='calc-result'>
      {result}
    </div>
  )
}

const Calculator = () => {
  let [result, setResult] = useState<string>('')

  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9',' 0'].map((val: string) => {
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
      <CalcResultBox result={result} />
      <div className='calc-buttons'>
        {buttons}
      </div>
    </div>
  )
}

export {
  Calculator
}