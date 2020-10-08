import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


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
        <AddItemButton 
          className="beans-show-add-item-btn" 
          product={_id}>
        </AddItemButton>
        <Button className="fav-btn">{ fav }</Button>
      </Card.Body>
    </Card>
  )
}

export default BeansCard