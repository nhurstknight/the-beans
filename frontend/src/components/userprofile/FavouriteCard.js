import React from 'react'
import { Card } from 'react-bootstrap'

import RemoveFavButton from './RemoveFavButton'

const FavouriteCard = ({ product: { _id, image, name, price  } }) => {
  return (

    <Card className="beans-card fav-item">
      <Card.Img variant="top" src={ image } alt={ name } />
      <Card.Body>
        <div className="card-text">
          <h5>{ name }</h5>
          <p>{`£${price[0]}`}</p>
        </div>
        <RemoveFavButton>{ _id }</RemoveFavButton>
      </Card.Body>
    </Card>
  )
}

export default FavouriteCard