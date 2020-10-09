import React from 'react'
import { Card } from 'react-bootstrap'

import RemoveFavButton from './RemoveFavButton'

const FavouriteCard = ({ product: { _id, image, name } }) => {
  return (
    <Card className="beans-card">
      <Card.Img variant="top" src={ image } alt={ name } />
      <Card.Body>
        <div className="card-text">
          <h5>{ name }</h5>
        </div>
        <div className="beans-card-btns-div"></div> 
        <RemoveFavButton>{ _id }</RemoveFavButton>
      </Card.Body>
    </Card>
  )
}

export default FavouriteCard