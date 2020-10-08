import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'

class Payment extends React.Component {

  render () {
    return (
      <Form className="payment-form">
        <Form.Group as={Row} controlId="formPlaintextNumber">
          <Form.Label column sm="2">
            Card number
          </Form.Label>
          <Col sm="10">
            <Form.Control 
              placeholder="XXXX-XXXX-XXXX-XXXX"
              min="16"
              max="16"
              type="number"
              name="number"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Cardholder name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="Name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col xs="auto" className="my-1">
            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
              Card expiry date
            </Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="00">MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Form.Control>
          </Col>

          <Col xs="auto" className="my-1">
            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
            </Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
            >
              <option value="00">YYYY</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            CVV
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" placeholder="XXX" />
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Save card details" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

export default Payment