/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import { loginUser } from '../../lib/api'
import { setToken, setUserId } from '../../lib/auth'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
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
      const response = await loginUser(this.state.formData)
      console.log(response)
      setToken(response.data.token)
      setUserId(response.data.userID)
      this.props.history.push('/beans')
      // toast.success('Success!', { position: toast.POSITION.BOTTOM_CENTER })
    } catch (err) {
      // console.log(err.response)
      this.setState({ errors: err.response.data.errors })
      toast.error('Error! Invalid username or password!', { position: toast.POSITION.BOTTOM_CENTER })
    }
  }

  render() {
    const { email, password } = this.state.formData
    return (
      <>
        <Container fluid className="login-reg-banner">
          <h1>Login</h1>
        </Container>

        <Container className="login-reg-wrapper">
          <Row>
            <Col className="login-reg-section">
              <h3>Sign in</h3>
              <div className='loginForm'>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group as={Row} controlId="formBasicEmail">
                    <Form.Label column sm={4}>
                      Email Address
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="email" 
                        placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={this.handleChange}/>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formBasicPassword">
                    <Form.Label column sm={4}>
                      Password
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="password" 
                        placeholder="Password"                       
                        name="password"
                        value={password}
                        onChange={this.handleChange} />
                    </Col>
                  </Form.Group>
                  <Button variant="primary" type="submit" block>Login</Button>
                </Form>
              </div>
            </Col>
            
            <Col className="login-reg-section">
              <h3>New to The Beans?</h3>
              <div className="login-reg-btn-wrapper">
                <Link to="/register">
                  <Button variant="outline-primary" size="lg" >Create an account</Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container> 
      </>
    )
  }
}

export default Login