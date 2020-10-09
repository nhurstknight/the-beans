import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import { getUserBasket, deleteBasket } from '../../lib/api'

import BasketItem from './BasketItem'

class Basket extends React.Component {
  state = {
    basket: []
  }

  
  async componentDidMount() {
    const response = await getUserBasket()
    console.log(response.data.basket)
    this.setState({
      basket: response.data.basket
    })
  }
  
  handleClick =  async () => {
    await deleteBasket()
    console.log('clicked')
    this.setState({
      basket: []
    })
    console.log(this.state.basket)
  }

  render() {
    return (
      <>
        {this.state.basket === [] ?
          <>
            <Container fluid className="beans-banner">
              <h1>Your basket</h1>
            </Container>
            <Container fluid className="empty-basket">
              <h1>Your basket is empty</h1>
              <Link to="/beans">
                <Button variant="Light" size="lg">Back to shop</Button>
              </Link>
            </Container>
          </>
          :
          <>
            <Container fluid className="beans-banner">
              <h1>Your basket</h1>
            </Container>
            <Container className="user-basket">
              <h4>Basket Summary</h4>
              { this.state.basket.map(item => (
                <BasketItem
                  key={item._id}
                  {...item} />
              )) }
              <Container fluid className="basket-btns">
                <Button
                  onClick={this.handleClick}
                  className="delete-basket-btn"
                  variant="danger" 
                  type="submit"
                  block>
                  Remove all items
                </Button>
                <Button
                  className="checkout-btn"
                  // variant="primary" 
                  type="submit"
                  block>
                  Proceed to checkout
                  <Link to="/basket/checkout">
                  </Link>
                </Button>
              </Container>
            </Container>
          </>
        }
      </>
    )
  }
}

export default Basket