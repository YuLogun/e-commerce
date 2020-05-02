import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_GovB0J0n71sBgP2mHZOilPs6003yd2A3DM'
  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful!')
  }

  return (
    <StripeCheckout
      name="GEEK Clothing Ltd."
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
