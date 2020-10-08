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
              <h3>Basket Summary</h3>
              { this.state.basket.map(item => (
                <BasketItem
                  key={item._id}
                  {...item} />
              )) }
              <Button
                onClick={this.handleClick}
                className="delete-basket-btn"
                variant="danger" 
                type="submit">
                Remove all items
              </Button>
              <Container className="checkout">
                <Link to="/basket/checkout">
                  <Button
                    // onClick={this.handleClick}
                    className="checkout-btn"
                    variant="primary" 
                    type="submit"
                    block>
                    Proceed to checkout
                  </Button>
                </Link>
              </Container>
            </Container>
          </>
        }
      </>
    )
  }
}

export default Basket