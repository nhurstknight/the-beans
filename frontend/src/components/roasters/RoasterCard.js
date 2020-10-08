import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const RoasterCard = ({ _id, logo }) => {
  return (
    <>
      <Card className="beans-card">
        <Card.Img className="RoasterImages" variant="top" src={ logo } alt={ logo } />
        <Card.Body>
          <div className="card-text">
            <Link to={`/roaster/${_id}`}>
            </Link>
          </div>
        </Card.Body>
      </Card>
      </>
  )


}

export default RoasterCard

