import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './logo.svg'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/shop" className="option">CONTACT</Link>
      </div>
    </div>
  )
}

export default Header