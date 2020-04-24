import React from 'react'
import './CartDropdown.scss'
import CustomButton from '../custom-button/Custom-button'
import { connect } from 'react-redux'
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
