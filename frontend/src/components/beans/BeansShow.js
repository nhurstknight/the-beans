import React from 'react'
import { Container, Col,  Image, ListGroup, Spinner, Jumbotron, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import AddItemButton from '../shop/AddItemButton'
import AddFavButton from '../userprofile/AddFavButton'
import CommentCard from '../comments/CommentCard'
import CommentComponent from '../comments/CommentComponent'

import { getSingleBeans, addCommentToBean } from '../../lib/api'

const fav = <FontAwesomeIcon icon={ faHeart } />

class BeansShow extends React.Component {
  state = {
    product: null,
    productData: null,
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
      product: productId,
      productData: response.data
    })
  }

  getData = async () => {
    const productId = this.props.match.params.id
    // console.log(this.props.match.params.id)
    const response = await getSingleBeans(productId)
    console.log(response)
    this.setState({
      productData: response.data
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
    const { productData, product } = this.state
    if (!productData) return (
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
            <Image className="beans-show-img" src={ productData.image }/>
          </Col>
          <Col xl={6}>
            <div className="beans-show-title">
              <h4>{ productData.name }</h4>
              <span>
              </span><p>{`£${productData.price[0]}`}</p>
            </div>
            <div className="beans-show-subtitle">
              <h3>{ productData.roasterName }</h3>
              <p>{`${productData.weight[0]}g`}</p>
            </div>

            <div>
              <p>{ productData.origin }</p>
              <p>{ productData.roast }</p>
              <ul>{ productData.tastingNotes.map(note => (
                <li>{ note }</li>
              )) }
              </ul>
            </div>

            <AddItemButton product={ productData._id }></AddItemButton>
            <AddFavButton className="fav-btn" product={ product }>{ fav }</AddFavButton>
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
          <ListGroup.Item> {this.state.productData.comments.map(comment => (
            <CommentCard key={ comment._id }{ ...comment }/>
          ))} </ListGroup.Item>
        </Container>
      </>
    )
  }
}
export default BeansShow