import React from 'react'
import { Container, Row, Card, ListGroup, Col, Form, Button } from 'react-bootstrap'
import { addressDetails, editCheckout } from '../../lib/api'

class CheckoutEdit extends React.Component {
  state = {
    emptyArray: null,
    formData: {
      buildingNumber: '',
      streetName: '',
      city: '',
      county: '',
      postcode: ''
    }
  }

  async componentDidMount() {
    const response = await addressDetails()
    console.log(response)
    if (response.data.addressDetails.length === 0) {
      return console.log('ADD ERROR MESSAGE (REQUIRES NEW ADDRESS/SOMTHING)')
    } else {
      const objectMinusOne = response.data.addressDetails.length - 1
      this.setState({
        buildingNumber: response.data.addressDetails[objectMinusOne].buildingNumber,
        streetName: response.data.addressDetails[objectMinusOne].streetName,
        city: response.data.addressDetails[objectMinusOne].city,
        county: response.data.addressDetails[objectMinusOne].county,
        postcode: response.data.addressDetails[objectMinusOne].postcode
      })
    }
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
    try { 
      const response = await editCheckout(this.state.formData)
      console.log(response)
      this.props.history.push('/profile')
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    const { buildingNumber, streetName, city, county, postcode } = this.state
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Edit Account Details</h1>
        </Container>
        <Container className="user-profile">
          <Container className="account-sidebar" xl={2}>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <Card.Title>Profile Navigation</Card.Title>
              </Card.Body>
              <ListGroup as="ul">
                <ListGroup.Item action href="/profile"> Favourites</ListGroup.Item>
                <ListGroup.Item action href="/profile/account" >Account Details</ListGroup.Item>
                <ListGroup.Item action href="/profile/checkout" active>Checkout Details</ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
          <Container className="login-reg-wrapper">
            <Row>
              <Col className="login-reg-section">
                <h3>Address Details</h3>
                <div className='loginForm'>

                  <Form.Group controlId="formBuildingNumber">
                    <Form.Label>Building Number</Form.Label>
                    <Form.Control 
                      type="buildingNumber" 
                      placeholder={buildingNumber}
                      name="buildingNumber"
                      value={this.state.formData.buildingNumber}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formStreetName">
                    <Form.Label>Street Name</Form.Label>
                    <Form.Control 
                      type="streetName" 
                      placeholder={streetName}
                      name="streetName"
                      value={this.state.formData.streetName}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control 
                        type="city" 
                        placeholder={city}
                        name="city"
                        value={this.state.formData.city}
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>
                  

                    <Form.Group controlId="formBasicCounty">
                      <Form.Label>County</Form.Label>
                      <Form.Control 
                        type="county" 
                        placeholder={county}
                        name="county" 
                        value={this.state.formData.county}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicpostcode">
                      <Form.Label>Postcode</Form.Label>
                      <Form.Control 
                        type="postcode" 
                        placeholder={postcode}
                        name="postcode"
                        value={this.state.formData.postcode}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" block>Submit</Button>
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