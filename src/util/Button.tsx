import React from 'react'
import './Button.css'

interface ButtonProps {
  onClick: () => void
  children: any
}

const Button = ({onClick, children, ...classNames}: ButtonProps) => {
  const handleClick = () => {
    onClick()
    return false
  }

  return (
    <a className='button fake-link' onClick={handleClick} href='#' {...classNames}>
      {children}
    </a>
  )
}

export {
  Button
}