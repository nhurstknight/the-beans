import React from 'react'
import { Container, Row, Card, ListGroup, Col, Form, Button } from 'react-bootstrap'
import { getID } from '../../lib/auth'
import { getSingleUser, editAccount } from '../../lib/api'

class AccountEdit extends React.Component {
  state = {
    userId: null,
    errors: null,
    formData: {
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      profileImage: null,
      password: null,
      passwordConfirmation: null
    }
  }

  async componentDidMount() {
    const userId = getID()
    const response = await getSingleUser(userId)
    this.setState({
      userId: userId,
      username: response.data.username,
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
      profileImage: response.data.profileImage
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
    try { 
      const response = await editAccount(this.state.formData)
      this.props.history.push('/profile')
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }
  
  render() {
    const { username, email, firstName, lastName, profileImage } = this.state
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Edit Account Details</h1>
        </Container>
        <Container className="account-sidebar">
          <Container className="filter-wrapper" xl={2}>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <Card.Title>Profile Navigation</Card.Title>
              </Card.Body>
              <ListGroup as="ul">
                <ListGroup.Item action href="/profile"> Favourites</ListGroup.Item>
                <ListGroup.Item action href="/profile/account" active>Account Details</ListGroup.Item>
                <ListGroup.Item action href="/profile/checkout">Checkout Details</ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
          <Container className="login-reg-wrapper">
            <Row>
              <Col className="login-reg-section">
                <h3>Account Details</h3>
                <div className='loginForm'>

                  <Form.Group controlId="formBasicUserName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                      type="username" 
                      placeholder={username}
                      name="username"
                      value={this.state.formData.username}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formUsername">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder={email}
                      name="email"
                      value={this.state.formData.email}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control 
                        type="firstName" 
                        placeholder={firstName}
                        name="firstName"
                        value={this.state.formData.firstName}
                        onChange={this.handleChange}
                      />
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Form.Group>
                  
                    <Form.Group controlId="formBasicLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control 
                        type="lastName" 
                        placeholder={lastName}
                        name="lastName"
                        value={this.state.formData.lastName}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicprofileImage">
                      <Form.Label>Profile Image URL</Form.Label>
                      <Form.Control 
                        type="profileImage" 
                        placeholder={profileImage}
                        name="profileImage" 
                        value={this.state.formData.profileImage}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={this.state.formData.password}
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control 
                        type="password" 
                        placeholder="Password Confirmation"
                        name="passwordConfirmation"
                        value={this.state.formData.passwordConfirmation}
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

export default AccountEdit