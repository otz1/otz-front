import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <nav className='container'>
        <ul>
          <li>Copyright &copy; 2020 &mdash; All Rights Reserved.</li>
          <li><a href='https://github.com/otz1'>Source Code</a></li>
          <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
        </ul>
      </nav>
    </footer>
  )
}

export {
  Footer
}
