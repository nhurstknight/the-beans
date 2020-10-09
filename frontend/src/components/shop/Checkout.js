import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
// import BasketItem from './BasketItem'

// import { getUserBasket } from '../../lib/api'


class Checkout extends React.Component {
  state = {
    basket: null
  }


  render() {
    return (
      <>
        <Container fluid>
          Placeholder for address form
          <Button block>
            <Link to="/basket/checkout/payment">
              Proceed to payment
            </Link>
          </Button>     
        </Container>
      </>
    )
  }
}

export default Checkout



