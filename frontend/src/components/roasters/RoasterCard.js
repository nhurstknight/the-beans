import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const RoasterCard = ({ _id, logo }) => {
  return (
    <Card href={`/roasters/${_id}`}
      className="roasterCard text-center text-white"
    >
      <Image className="RoasterImages" src={logo} fluid/>
    </Card>
  )
}

export default RoasterCard

