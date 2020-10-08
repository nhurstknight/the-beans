import React from 'react'
import { Container, Col,  Image, Spinner, Jumbotron, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import AddItemButton from '../shop/AddItemButton'
import CommentCard from '../comments/CommentCard'
import CommentComponent from '../comments/CommentComponent'

import { getSingleBeans, addCommentToBean } from '../../lib/api'

const fav = <FontAwesomeIcon icon={ faHeart } />

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
    console.log(response)
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
    const { product } = this.state
    if (!product) return (
      <Jumbotron>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Jumbotron>
    )
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Shop with us</h1>
        </Container>
        <Container className="beans-show-wrapper">
          <Col xl={6}>
            <Image className="beans-show-img" src={ product.image }/>
          </Col>
          <Col xl={6}>
            <div className="beans-show-info">
              <div className="beans-show-title">
                <h2>{ product.name }</h2>
                <span>
                  <p>{`£${product.price[0]}`}</p>
                </span>
              </div>
              <div className="beans-show-subtitle">
                <h4>{ product.roaster }</h4>
                <span>
                  <p>{`${product.weight[0]}g`}</p> 
                </span>
              </div>

              <div>
                <p>{ product.origin }</p>
                <p>{ product.roast }</p>
                <ul>{ product.tastingNotes.map(note => (
                  <li>{ note }</li>
                )) }
                </ul>
              </div>
            </div>

            <AddItemButton product={ product._id }></AddItemButton>
            <Button className="fav-btn">{ fav }</Button>
          </Col>
        </Container>
        <Container className="comments">
          <Container className="comment-submit-container">
            <h2>Leave a Comment</h2>
            <CommentComponent 
              value={this.state.formData}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Container>

          <Container className="comment-view-container">
            <h2>Customer Reviews</h2>
            {this.state.product.comments.map(comment => (
              <CommentCard className="comment" key={ comment._id }{ ...comment }/>
            ))} 
          </Container>
        </Container>
      </>
    )
  }
}
export default BeansShow