import React from 'react'
import './Button.css'

interface ButtonProps {
  onClick: () => void
  id?: string
  children: any
}

const Button = ({onClick, children, ...classNames}: ButtonProps) => {
  const handleClick = () => {
    onClick()
    return false
  }

  return (
    <span className='button fake-link' onClick={handleClick} {...classNames}>
      {children}
    </span>
  )
}

export {
  Button
}