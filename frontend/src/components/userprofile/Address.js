import React from 'react'
import { Container, Row, Card, ListGroup, Col, Form, Button } from 'react-bootstrap'
import { addressDetails, editCheckout } from '../../lib/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
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
      toast.success('Address Information Submitted!', { position: toast.POSITION.BOTTOM_CENTER })
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
      toast.error('Error! Ensure all fields are correct!', { position: toast.POSITION.BOTTOM_CENTER })
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
                <h4>Profile Navigation</h4>
              </Card.Body>
              <ListGroup variant="flush" as="ul">
                <ListGroup.Item action href="/profile"> Favourites</ListGroup.Item>
                <ListGroup.Item action href="/profile/account" >Account Details</ListGroup.Item>
                <ListGroup.Item action href="/profile/checkout" active>Address Details</ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
          <Container>
            <Form className="edit-account-form" onSubmit={ this.handleSubmit } m={8}>
              <Form.Group as={Row} controlId="formBuildingNumber">
                <Form.Label column sm={4}>Building Number</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="buildingNumber" 
                    placeholder={buildingNumber}
                    name="buildingNumber"
                    value={this.state.formData.buildingNumber}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formStreetName">
                <Form.Label column sm={4}>Street Name</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="streetName" 
                    placeholder={streetName}
                    name="streetName"
                    value={this.state.formData.streetName}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group as={Row} controlId="formBasicCity">
                <Form.Label column sm={4}>City</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="city" 
                    placeholder={city}
                    name="city"
                    value={this.state.formData.city}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group as={Row} controlId="formBasicCounty">
                <Form.Label column sm={4}>County</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="county" 
                    placeholder={county}
                    name="county" 
                    value={this.state.formData.county}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group as={Row} controlId="formBasicpostcode">
                <Form.Label column sm={4}>Postcode</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="postcode" 
                    placeholder={postcode}
                    name="postcode"
                    value={this.state.formData.postcode}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Button onclick={this.submitAddressInfoToast} variant="primary" type="submit" block>Submit</Button>
            </Form>
          </Container> 
        </Container>
      </>
    )
  }
}

export default CheckoutEdit