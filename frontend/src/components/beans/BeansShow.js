import React from 'react'
import { Container, Col,  Image, Card, ListGroup } from 'react-bootstrap'

import { getSingleBeans } from '../../lib/api'
// import CommentComp from '../comments/CommentComp'

class BeansShow extends React.Component {
  state = {
    product: null
    // comments: ['']
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
    console.log(this.state)
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
                {/* <ListGroup.Item>
                  <ul>{ product.tastingNotes.map(note => (
                    <li>{ note }</li>
                  )) }
                  </ul>
                </ListGroup.Item> */}
              </ListGroup>
            </Card>
          </Col>
          {/* <CommentComp /> */}
        </Container>
        {/* <Container className="comment-container" fluid xl={16}>
          <Row xs={4} md={4} xl={4} >
            { this.state.product.comments.map(comment => (
              <CommentComp key={ comment._id} { ...comment } /> ))}
          </Row>
        </Container> */}
      </>
    )
  }
}



export default BeansShow