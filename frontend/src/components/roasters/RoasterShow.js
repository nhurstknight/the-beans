import React from 'react'
import { Container, Col,  Image, Card, ListGroup, Carousel } from 'react-bootstrap'

import { getSingleRoaster } from '../../lib/api'

class BeansShow extends React.Component {
  state = {
    roaster: null
  }

  async componentDidMount() {
    const roasterId = this.props.match.params.id
    const response = await getSingleRoaster(roasterId)
    console.log('got this far')
    console.log(response)
    this.setState({
      roaster: response.data
    })
  }

  render() {
    const { roaster } = this.state
    if (!roaster) return <div>Loading...</div>
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.wallpapersafari.com/23/0/98zDiH.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://s1.1zoom.me/b3164/425/Coffee_Wood_planks_Cup_Sugar_Spoon_Vapor_566523_1920x1080.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.wallpaperscraft.com/image/auto_road_traffic_120501_1920x1080.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
          
        <Container className="roaster-show-wrapper">
          <Col xl={6}>
            <Image src={ roaster.image } fluid />
          </Col>
          <Col xl={6}>
            <Card style={{ width: '28rem' }}>
              <ListGroup variant="flush">
                <ListGroup.Item>{ roaster.name }</ListGroup.Item>
                <ListGroup.Item>{ roaster.bio }</ListGroup.Item>
                <ListGroup.Item>
                  <ul>{ roaster.coffeeShopLocation.map(location => (
                    <li>Locations: { location }</li>
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