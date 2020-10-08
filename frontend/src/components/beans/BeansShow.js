import React from 'react'
import { Container, Col,  Image, Card, ListGroup, Spinner } from 'react-bootstrap'

import AddItemButton from '../shop/AddItemButton'
import { getSingleBeans, addCommentToBean } from '../../lib/api'
import CommentCard from '../comments/CommentCard'
import CommentComponent from '../comments/CommentComponent'

class BeansShow extends React.Component {
  state = {
    product: null,
    formData: {
      text: '',
      rating: ''
    }
  }

  async componentDidMount() {
    const productId = this.props.match.params.id
    // console.log(this.props.match.params.id)
    const response = await getSingleBeans(productId)
    // console.log(response)
    this.setState({
      product: response.data
    })
  }

  getData = async () => {
    const productId = this.props.match.params.id
    // console.log(this.props.match.params.id)
    const response = await getSingleBeans(productId)
    console.log(response)
    this.setState({
      product: response.data
    })
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const beansId = this.props.match.params.id
    const response = await addCommentToBean(beansId, this.state.formData)
    console.log(response)
    const formData = {
      text: '',
      rating: ''
    }
    this.getData()
    this.setState({ formData })
  }
  
  render() {
    console.log(this.state.formData)
    const { product } = this.state
    if (!product) return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Shop with us</h1>
        </Container>
        <Container className="beans-show-wrapper">
          <Col xl={6}>
            <Image src={ product.image }/>
          </Col>
          <Col xl={6}>
            <Card style={{ width: '40rem' }}>
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
              <AddItemButton product={ product._id }></AddItemButton>
            </Card>
          </Col>
        </Container>
        <Container className="comment-submit-container">
          <CommentComponent 
            value={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Container>
        <Container className="comment-view-container">
          <ListGroup.Item> {this.state.product.comments.map(comment => (
            <CommentCard key={ comment._id }{ ...comment }/>
          ))} </ListGroup.Item>
        </Container>
      </>
    )
  }
}
export default BeansShow