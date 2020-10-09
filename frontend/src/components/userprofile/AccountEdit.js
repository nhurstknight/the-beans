import React from 'react'
import { Container, Row, Card, ListGroup, Col, Form, Button } from 'react-bootstrap'
import { getID } from '../../lib/auth'
import { getSingleUser, editAccount } from '../../lib/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
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
      await editAccount(this.state.formData)
      this.props.history.push('/profile')
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }
  
  submitAccountInfoToast = () => {
    toast.success('Account Information Submitted!', { position: toast.POSITION.BOTTOM_CENTER })
  }

  render() {
    const { username, email, firstName, lastName, profileImage } = this.state
    return (
      <>
        <Container fluid className="beans-banner">
          <h1>Edit Account Details</h1>
        </Container>
        <Container className="user-profile">
          <Container className="account-sidebar" m={3}>
            <Card style={{ width: '12rem' }}>
              <Card.Body>
                <h4>Profile Navigation</h4>
              </Card.Body>
              <ListGroup variant="flush" as="ul">
                <ListGroup.Item action href="/profile"> Favourites</ListGroup.Item>
                <ListGroup.Item action href="/profile/account" active>Account Details</ListGroup.Item>
                <ListGroup.Item action href="/profile/checkout">Address Details</ListGroup.Item>
              </ListGroup>
            </Card>
          </Container>
          <Container>

            <Form className="edit-account-form" onSubmit={ this.handleSubmit } m={8}>
              <Form.Group as={Row} controlId="formBasicUserName">
                <Form.Label column sm={4}>Username</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="username" 
                    placeholder={username}
                    name="username"
                    value={this.state.formData.username}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              {/* should below say formEmail */}
              <Form.Group as={Row} controlId="formUsername"> 
                <Form.Label column sm={4}>Email address</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="email" 
                    placeholder={email}
                    name="email"
                    value={this.state.formData.email}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group as={Row} controlId="formBasicFirstName">
                <Form.Label column sm={4}>First Name</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="firstName" 
                    placeholder={firstName}
                    name="firstName"
                    value={this.state.formData.firstName}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group as={Row} controlId="formBasicLastName">
                <Form.Label column sm={4}>Last Name</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="lastName" 
                    placeholder={lastName}
                    name="lastName"
                    value={this.state.formData.lastName}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group as={Row} controlId="formBasicprofileImage">
                <Form.Label column sm={4}>Profile Image URL</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="profileImage" 
                    placeholder={profileImage}
                    name="profileImage" 
                    value={this.state.formData.profileImage}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group as={Row} controlId="formBasicPassword">
                <Form.Label column sm={4}>Password</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="password" 
                    placeholder="Password"
                    name="password"
                    value={this.state.formData.password}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Form.Group as={Row} controlId="formBasicPassword">
                <Form.Label column sm={4}>Password Confirmation</Form.Label>
                <Col sm={8}>
                  <Form.Control 
                    type="password" 
                    placeholder="Password Confirmation"
                    name="passwordConfirmation"
                    value={this.state.formData.passwordConfirmation}
                    onChange={this.handleChange}
                  />
                </Col>
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>
              <Button 
                onClick={this.submitAccountInfoToast}
                className="acct-btns" 
                variant="primary" 
                type="submit" 
                block>
                Update details
              </Button>
            </Form>
          </Container>

        </Container>
      </>
    )
  }
}

export default AccountEdit
