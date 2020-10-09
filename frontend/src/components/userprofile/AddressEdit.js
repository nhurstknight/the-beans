import React from 'react'
import { Container, Row, Card, ListGroup, Col, Form, Button } from 'react-bootstrap'
import { addressDetails, editCheckout } from '../../lib/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Address from './Address'

const AddressEdit  = () => {
  return (
    <>
      <Container fluid className="beans-banner">
        <h1>Edit Address Details</h1>
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
          <Address></Address>
        </Container>
      </Container>
    </>
  )
}

export default AddressEdit