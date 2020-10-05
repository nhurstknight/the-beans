import React from 'react'
import { Container, Col,  Image, Card, ListGroup } from 'react-bootstrap'

import { getSingleBeans } from '../../lib/api'

class BeansShow extends React.Component {
  state = {
    product: null
  }

  async componentDidMount() {
    const beansId = this.props.match.params.id
    // console.log(this.props.match.params.id)
    const response = await getSingleBeans(beansId)
    console.log(response)
    this.setState({
      product: response.data
    })
  }

  render() {
    const { product } = this.state
    if (!product) return <div>Loading...</div>
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Shop with us</h1>
        </Container>
        <Container className="beans-show-wrapper">
          <Col xl={6}>
            <Image src={ product.image } fluid />
          </Col>
          <Col xl={6}>
            <Card style={{ width: '28rem' }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{ product.name }</ListGroup.Item>
                <ListGroup.Item>{`£${product.price[0]}`}</ListGroup.Item>
                <ListGroup.Item>{`${product.weight[0]}g`}</ListGroup.Item>
                <ListGroup.Item>{ product.origin }</ListGroup.Item>
                <ListGroup.Item>{ product.roast }</ListGroup.Item>
                <ListGroup.Item>
                  <ul>{ product.tastingNotes.map(note => (
                    <li>{ note }</li>
                  )) }
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Container>
      </>
    )
  }
}

export default BeansShow