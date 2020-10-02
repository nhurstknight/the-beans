import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Jumbotron fluid>
      <Container className="hero">
        <h1>The Beans</h1>
        <p>
          Bringing the best beans direct to your door
        </p>
        <p>
          <Button variant="primary">Shop with us!</Button>
        </p>
      </Container>
    </Jumbotron>
  )
}

export default Home