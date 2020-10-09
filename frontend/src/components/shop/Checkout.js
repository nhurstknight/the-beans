import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
// import BasketItem from './BasketItem'
import CheckoutAddress from './CheckoutAddress'



class Checkout extends React.Component {
  state = {
    basket: null
  }

  render() {
    return (
      <>
        <CheckoutAddress></CheckoutAddress>
        <Container classname="checkout-btn-group">
          <Button 
            className="back-btn"
            variant="danger"
            block>
            <Link to="/basket">
              Back to basket
            </Link>
          </Button>     
          <Button 
            className="proceed-btn"
            variant="success"
            block>
            <Link to="/payment">
              Proceed to payment
            </Link>
          </Button>     
        </Container>
      </>
    )
  }
}

export default Checkout



