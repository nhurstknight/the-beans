import React from 'react'
import { Container } from 'react-bootstrap'
import { getUserBasket } from '../../lib/api'

class Basket extends React.Component {
  state = {
    basket: null
  }

  async componentDidMount() {
    const response = await getUserBasket()
    console.log(response.data)
    // this.setState({
    //   basket: response.data
    // })
  }

  render() {
    return (
      <>
        <Container>
          
        </Container>
        <Container>

        </Container>
      </>
    )
  }
}

export default Basket