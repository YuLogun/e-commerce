import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import bag from './sumka.jpg'
import MrWednesday from './MrWednesday.png'
import { ReactComponent as Logo } from './MrWednesday.svg'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo style={{width: 'auto', height: 70}} />
        {/* <img src={MrWednesday} style={{width: 'auto', height: 70}} /> */}
       {/*  <div style={{backgroundImage: `url(${bag})`, color: 'red'}} /> */}
      </Link>
      <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/shop" className="option">CONTACT</Link>
      </div>
    </div>
  )
}

export default Header