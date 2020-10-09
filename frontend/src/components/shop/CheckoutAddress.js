import React from 'react'

import Address from '../userprofile/Address'

const CheckoutAddress = () => {
  return (
    <>
      <div className="payment-form">
        <h3>Shipping details</h3>
      </div>
      <Address></Address>
    </>
  )
}

export default CheckoutAddress