import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

const OrderConfirmation = () => {
  return (
    <>
      <Container fluid className="beans-banner">
        <h1>Shop with us</h1>
      </Container>
      <h2>Order Confirmation</h2>
      <p>Your order is confirmed</p>
      <Button 
        className="back-btn"
        variant="danger"
        block>
        <Link to="/">
          Back to home
        </Link>
      </Button>  
    </>
  )
}

export default OrderConfirmation