/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      profileImage: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
  }

  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    const errors = {
      ...this.state.errors,
      [event.target.name]: ''
    }
    this.setState({  formData, errors })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await registerUser(this.state.formData)
      console.log(response)
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    const { username, firstName, lastName, email, password, passwordConfirmation } = this.state.formData
    return (
      <>
        <Container fluid className="login-reg-banner">
          <h1>Register</h1>
        </Container>

        <Container className="login-reg-wrapper">
          <Row>
            <Col className="login-reg-section">
              <h3>Sign in</h3>
              <Link to="/login">
                <Button variant="outline-primary" size="lg">I have an account</Button>
              </Link>
            </Col>

            <Col className="login-reg-section">
              <h3>New to The Beans?</h3>
              <div className="registerForm">
                <Form onSubmit={ this.handleSubmit }>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                      className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                      type="username" 
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>

                  <Form>
                    <Form.Row>
                      <Col> 
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          type="firstName" 
                          placeholder="First Name"
                          name="firstName"
                          value={firstName}
                          onChange={this.handleChange}/>
                      </Col>
                      <Col>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control 
                          type="lastName" 
                          placeholder="Last Name"
                          name="lastName"
                          value={lastName}
                          onChange={this.handleChange}/>
                      </Col>
                    </Form.Row>
                  </Form>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                      type="Username" 
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                  </Form.Group>

                  {/* <Form.Group controlId="formBasicUrl">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control 
                      className={`input ${this.state.errors.profileImage ? 'is-danger' : ''}`}
                      type="profileImage" 
                      name="profileImage"
                      placeholder="PLACEHOLDER URL LINK "
                      value={profileImage}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group> */}


                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      {/* Your password is protected in our database with bcrypt technology. */}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="Password Confirmation"
                      name="passwordConfirmation"
                      value={passwordConfirmation}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  <Button className="switch-btn" variant="primary" type="submit" block> Register </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container> 
      </>
    )
  }
}

export default Register