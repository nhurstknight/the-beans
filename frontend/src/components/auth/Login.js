/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Form, Button } from 'react-bootstrap'

import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'


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
      this.props.history.push('/characters')
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    const { email, password } = this.state.formData
    return (
      <div className='loginForm'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

export default Login