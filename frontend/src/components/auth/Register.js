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

  formValidation = () => {

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
              <div className="login-reg-btn-wrapper">
                <Link to="/login">
                  <Button variant="outline-primary" size="lg">I have an account</Button>
                </Link>
              </div>
            </Col>

            <Col className="login-reg-section">
              <h3>New to The Beans?</h3>
              <div className="registerForm">
                <Form onSubmit={ this.handleSubmit }>
                  <Form.Group as={Row} controlId="formBasicUsername">
                    <Form.Label column sm={4}>Username</Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                        type="username" 
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formBasicFname">
                    <Form.Label column sm={4}>First name</Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="firstName" 
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}/>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formBasicLname">
                    <Form.Label column sm={4}>Last name</Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="lastName" 
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}/>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label column sm={4}>Email address</Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="email" 
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}/>
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label column sm={4}>Password</Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}/>
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label column sm={4}>Confirm Password</Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="password" 
                        placeholder="Password Confirmation"
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        onChange={this.handleChange}/>
                      <Form.Text className="text-muted">
                      </Form.Text>
                    </Col>
                  </Form.Group>
                  <Button className="switch-btn" variant="primary" type="submit" block> Register</Button>
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