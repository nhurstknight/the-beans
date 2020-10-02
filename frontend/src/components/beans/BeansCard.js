import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const BeansCard = ({ _id, image, name, price }) => {
  return (
    <Card className="beans-card">
      <Link to={`/beans/${_id}`}>
        <Card.Img variant="top" src={ image } alt={ name } />
        <Card.Body>
          <Card.Title>{ name }</Card.Title>
          {/* need to display multiple prices */}
          <Card.Subtitle>{`£${price[0]}`}</Card.Subtitle>  
        </Card.Body>
      </Link>
    </Card>
  )
}

export default BeansCard