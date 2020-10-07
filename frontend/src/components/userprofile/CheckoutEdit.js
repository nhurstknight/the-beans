import React from 'react'
import { Container, Row, Card, ListGroup, Col, Form, Button } from 'react-bootstrap'
import { getID } from '../../lib/auth'
import { getSingleUser, editCheckout } from '../../lib/api'

class CheckoutEdit extends React.Component {
  state = {
    profileDetails: null,
    tempData: []
  }

  async componentDidMount() {
    const userId = getID()
    console.log(userId)
    const response = await getSingleUser(userId)
    console.log(response)
    this.setState({
      profileDetails: response.data
    })
  }

  render() {
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Edit Checkout Address Details</h1>
        </Container>
        <Container className="beans-index-main">
          <Container className="filter-wrapper" xl={2}>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <Card.Title>Profile Navigation</Card.Title>
              </Card.Body>
              <ListGroup as="ul">
                <ListGroup.Item action href="/profile"> Favourites</ListGroup.Item>
                <ListGroup.Item action href="/profile/account">Account Details</ListGroup.Item>
                <ListGroup.Item action href="/profile/checkout" active>Checkout Details</ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
          <Container className="login-reg-wrapper">
            <Row>
              <Col className="login-reg-section">
                <h3>Checkout Details</h3>
                <div className='loginForm'>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Address</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="Email"
                        name="email"
                        value=''
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>
                  
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Address</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value=''
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>Login</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container> 
        </Container>
      </>
    )
  }
}

export default CheckoutEdit