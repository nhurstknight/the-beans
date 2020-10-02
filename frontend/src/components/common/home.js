import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

const Home = () => {
  return (
    <Jumbotron fluid>
      <section className="hero">
        <h1>The Beans</h1>
        <p>
          Bringing the best beans direct to your door
        </p>
        <p>
          <Button variant="primary">Shop with us!</Button>
        </p>
      </section>
    </Jumbotron>
  )
}

export default Home