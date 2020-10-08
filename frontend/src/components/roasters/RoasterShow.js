import React from 'react'
import { Container,  Image, Card, Row } from 'react-bootstrap'

import { getSingleRoaster, getRoasterProducts } from '../../lib/api'
import BeansCard from '../beans/BeansCard'

class RoasterShow extends React.Component {
  state = {
    roaster: null,
    beans: null,
    roasterBean: null,
    roasterName: null
  }

  async componentDidMount() {
    const roasterId = this.props.match.params.id
    const response = await getSingleRoaster(roasterId)
    const response1 = await getRoasterProducts(this.state.roasterName)
    this.setState({
      roaster: response.data,
      beans: response1.data,
      roasterName: response.data.name
    })
  }

  async componentDidUpdate() {
    const response1 = await getRoasterProducts(this.state.roasterName)
    this.setState({
      beans: response1.data
    })
  }
  
  
  
  render() {
    const { roaster } = this.state
    if (!roaster) return <div>Loading...</div>
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Check out the Roasters</h1>
        </Container>
        <Container className="roaster-show-main" >
          <Container xs={6} md={4}>        
            <Card className="roaster-logo-and-bio">
              <Image className="roaster-logo" src={roaster.logo} fluid/>
            </Card>
          </Container>
          <Card className="roaster-bio">
            <h1>Roaster's Biography</h1>
            <br></br>
            {roaster.bio}
          </Card>
        </Container>
        <Container>
          <Container className="roaster-beans-index-grid" fluid xl={10}>
            <Row xs={1} md={3} xl={4} >
              { this.state.beans.map(bean => (
                <BeansCard
                  key={bean._id}
                  {...bean} />
              ))}
            </Row>
          </Container>
        </Container>
      </>
    )
  }
}

export default RoasterShow


// filterProducts => (this.state.beans)) {
//   beans.filter(bean => bean.name === this.state.roasterName)
//   this.setState({
//     roasterBean: bean
//   })
// }

  
//  <Carousel>
// {this.beans.map(item => (
// <Carousel.Item>
//   <img
//     className="d-block w-100"
//     src={item.src}
//     alt={item.alt}
//   />
//   <Carousel.Caption>
//     <h3>{item.captionTitle}</h3>
//     <p>{item.caption}</p>
//   </Carousel.Caption>
// </Carousel.Item>
// )}
// </Carousel>


// this.state.beans.filter(bean => parseInt(beans.name) === parseInt(this.state.roaster.name))
// this.setState({
//   roasterBean: bean
// })



// <>
// <Container xl={6}>
//   <img src={roaster.logo}/>
// </Container>
// <Container className="roaster-show-wrapper">
//   <Col xl={6}>
//     <Image src={ roaster.image } fluid />
//   </Col>
//   <Col xl={6}>
//     <Card style={{ width: '28rem' }}>
//       <ListGroup variant="flush">
//         <ListGroup.Item>{ roaster.bio }</ListGroup.Item>
//         <ListGroup.Item>
//           <ul>{ roaster.coffeeShopLocation.map(location => (
//             <li>Locations: { location }</li>
//           )) }
//           </ul>
//         </ListGroup.Item>
//       </ListGroup>

//     </Card>
//   </Col>
// </Container>

// <Accordion>
//   <Card style={{ width: '28rem' }}>
//     <Card.Header>
//       <Accordion.Toggle as={Button} variant="link" eventKey="1">
//               Check out customer reviews!
//       </Accordion.Toggle>
//     </Card.Header>
//     <Accordion.Collapse eventKey="1">
//       <Card.Body>Hello! I'm another body</Card.Body>
//     </Accordion.Collapse>
//   </Card>
// </Accordion>


//     <Carousel>
// <Carousel.Item>
// <img
//   className="d-block w-50"
//   src="https://olegnn.github.io/react-shopping-cart/public/macbook-case-photo.jpeg"
//   alt="First slide"
// />
// <Carousel.Caption>
//   <h3>First slide label</h3>
//   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
// <img
//   className="d-block w-50"
//   src="https://olegnn.github.io/react-shopping-cart/public/macbook-case-photo.jpeg"
//   alt="Third slide"
// />

// <Carousel.Caption>
//   <h3>Second slide label</h3>
//   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// </Carousel.Caption>
// </Carousel.Item>
// <Carousel.Item>
// <img
//   className="d-block w-50"
//   src="https://olegnn.github.io/react-shopping-cart/public/macbook-case-photo.jpeg"
//   alt="Third slide"
// />

// <Carousel.Caption>
//   <h3>Third slide label</h3>
//   <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
// </Carousel.Caption>
// </Carousel.Item>
// </Carousel>
// </>
// )
// }