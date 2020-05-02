import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './logo.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/CartIcon'
import CartDropdown from '../cart-dropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        {/*  <Link to="/shop" className="option">
          CONTACT
        </Link> */}
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
