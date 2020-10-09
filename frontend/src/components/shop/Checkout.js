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
        <Container fluid>
          <Button block>
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



