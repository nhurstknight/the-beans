import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RoasterCard = ({ _id, logo }) => {
  return (
    <>
      <Link to={`/roasters/${_id}`}>
        <Card className="roaster-card">
          <Card.Img className="RoasterImages" variant="top" src={ logo } alt={ logo } />
        </Card>
      </Link>
    </>
  )
}

export default RoasterCard

