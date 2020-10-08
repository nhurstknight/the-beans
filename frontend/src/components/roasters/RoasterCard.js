import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const RoasterCard = ({ _id, logo }) => {
  return (
    <Card
      className="roaster-card text-center bg-dark text-white"
    >
      <Image className="roaster-img" src={logo} fluid/>
      <Link to={`/roasters/${_id}`}>
        <Button className="roaster-card-btn" variant="primary">Company Page</Button>
      </Link>
    </Card>
  )
}

export default RoasterCard

