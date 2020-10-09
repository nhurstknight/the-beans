import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


import AddFavButton from '../userprofile/AddFavButton'
import AddItemButton from '../../components/shop/AddItemButton'

const fav = <FontAwesomeIcon icon={ faHeart } />

const BeansCard = ({ _id, image, name, price }) => {

  return (
    <Card className="beans-card">
      <Card.Img variant="top" src={ image } alt={ name } />
      <Card.Body>
        <div className="card-text">
          <Link to={`/beans/${_id}`}>
            <h5>{ name }</h5>
          </Link>
          <p>{`£${price[0]}`}</p>
        </div>
        <div className="beans-card-btns-div"></div> 
        <div className="bean-show-btns">
          <AddItemButton 
            className="beans-card-add-item-btn" 
            product={_id}>
          </AddItemButton>
          <AddFavButton 
            className="fav-btn"
            product={_id}>{ fav }
          </AddFavButton>
        </div>
      </Card.Body>
    </Card>
  )
}

export default BeansCard