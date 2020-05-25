import React from 'react'
import './Header.css'

interface HeaderProps {
  children?: any
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header id='top-header'>
      <div className='container'>
        <h1 className='logo'><a className='logoLink' href={`//${window.location.host}`}>{window.location.host}</a> <span className='tagline'>search with otzit!</span></h1>
        {children && children}
      </div>
    </header>
  )
}

export {
  Header
}