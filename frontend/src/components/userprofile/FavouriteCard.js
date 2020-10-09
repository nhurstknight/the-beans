import React from 'react'
import { Card } from 'react-bootstrap'

import RemoveFavButton from './RemoveFavButton'

const FavouriteCard = ({ _id, product: { image, name, price } }) => {
  return (

    <Card className="beans-card fav-item">
      <Card.Img variant="top" src={ image } alt={ name } />
      <Card.Body>
        <div className="card-text">
          <h5>{ name }</h5>
          <p>{`£${price[0]}`}</p>
        </div>
        <div className="beans-card-btns-div"></div> 
        <RemoveFavButton _id={_id} >{ _id }</RemoveFavButton>
      </Card.Body>
    </Card>
  )
}

export default FavouriteCard