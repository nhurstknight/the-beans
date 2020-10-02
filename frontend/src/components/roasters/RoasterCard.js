import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const RoasterCard = ({ _id, logo }) => {
  return (
    <Card
      className="roasterCard text-center bg-dark text-white"
    >
      <Image className="RoasterImages" src={logo} fluid/>
      <Link to={`/roasters/${_id}`}>
        <Button className="roasterCardButton" variant="primary">Company Page</Button>
      </Link>
    </Card>
  )
}

export default RoasterCard

