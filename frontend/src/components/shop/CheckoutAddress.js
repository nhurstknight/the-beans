import React from 'react'
import Address from '../userprofile/Address'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

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