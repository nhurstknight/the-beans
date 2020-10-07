import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import AddItemButton from '../../components/shop/AddItemButton'

const BeansCard = ({ _id, image, name, price }) => {
  return (
    <Card className="beans-card">
      <Card.Img variant="top" src={ image } alt={ name } />
      <Card.Body>
        <Link to={`/beans/${_id}`}>
          <Card.Title>{ name }</Card.Title>
        </Link>
        {/* display multiple prices? */}
        <Card.Subtitle>{`£${price[0]}`}</Card.Subtitle>  
        <AddItemButton 
          className="beans-show-add-item-btn" 
          product={_id}>
        </AddItemButton>
      </Card.Body>
    </Card>
  )
}

export default BeansCard