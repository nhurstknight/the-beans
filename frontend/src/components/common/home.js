import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Jumbotron fluid>
      <Container className="hero">
        <div className="hero-text">
          <h1>The Beans</h1>
          <p>
            Bringing the best beans direct to your door
          </p>
          <p>
            <Link to="/beans">
              <Button variant="Light" size="lg">Shop with us!</Button>
            </Link>
          </p>
        </div>
      </Container>
    </Jumbotron>
  )
}

export default Home