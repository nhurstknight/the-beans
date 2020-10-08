import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const RoasterCard = ({ _id, logo }) => {
  return (
    <>
            <Link to={`/roaster/${_id}`}>
      <Card className="roaster-card">
        <Card.Img className="RoasterImages" variant="top" src={ logo } alt={ logo } />
        <Card.Body>
          <div className="card-text">
          </div>
        </Card.Body>
      </Card>
            </Link>
    </>
  )


}

export default RoasterCard

